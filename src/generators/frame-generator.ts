/// <reference types="@figma/plugin-typings" />

/**
 * フレーム生成ユーティリティ
 * デザインシステムの視覚的なドキュメントを自動生成
 */

import { COLORS, ColorDefinition } from '../constants/colors';
import { TEXT_STYLES, TextStyleDefinition } from '../constants/text-styles';
import { SPACING } from '../constants/spacing';
import { getExistingVariable, getExistingCollection, getExistingTextStyle } from '../utils/helpers';

// レイアウト定数
var LAYOUT = {
  SWATCH_SIZE: 80,
  SWATCH_GAP: 16,
  SECTION_GAP: 48,
  PADDING: 40,
  LABEL_HEIGHT: 24,
  COLORS_PER_ROW: 5
};

// 共通カラー定数
var COLORS_UI = {
  WHITE: { r: 1, g: 1, b: 1 },
  LIGHT_GRAY: { r: 0.97, g: 0.97, b: 0.97 },
  BORDER: { r: 0.9, g: 0.9, b: 0.9 },
  TEXT_PRIMARY: { r: 0.1, g: 0.1, b: 0.1 },
  TEXT_SECONDARY: { r: 0.5, g: 0.5, b: 0.5 },
  PRIMARY: { r: 0.2, g: 0.4, b: 0.8 },
  ERROR: { r: 0.8, g: 0.2, b: 0.2 }
};

/**
 * RGB値をHEX文字列に変換
 */
function rgbToHex(r: number, g: number, b: number): string {
  var toHex = function(value: number): string {
    var hex = Math.round(value * 255).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };
  return "#" + toHex(r) + toHex(g) + toHex(b);
}

/**
 * 色名からVariable IDを取得
 */
function getColorVariableId(colorName: string): string | null {
  var tokensCollection = getExistingCollection("Tokens");
  if (!tokensCollection) return null;

  var variable = getExistingVariable(tokensCollection, "sys/" + colorName);
  return variable ? variable.id : null;
}

/**
 * 色名からRGB値を取得（フォールバック付き）
 */
function getColorRgb(colorName: string, fallback: RGB): RGB {
  var colorDef = COLORS.find(function(c) { return c.name === colorName; });
  if (colorDef) {
    return { r: colorDef.light.r, g: colorDef.light.g, b: colorDef.light.b };
  }
  return fallback;
}

/**
 * Variable参照付きSolidPaintを生成
 */
function createBoundSolidPaint(colorName: string, fallbackColor: RGB): SolidPaint {
  var variableId = getColorVariableId(colorName);
  var rgb = getColorRgb(colorName, fallbackColor);

  if (variableId) {
    return {
      type: "SOLID",
      color: rgb,
      boundVariables: {
        color: { type: "VARIABLE_ALIAS", id: variableId }
      }
    } as SolidPaint;
  }
  return { type: "SOLID", color: rgb };
}

/**
 * 共通フレーム設定を適用
 */
function applyFrameDefaults(frame: FrameNode, options: {
  name: string;
  direction: "HORIZONTAL" | "VERTICAL";
  spacing: number;
  padding?: number;
  bgColor?: RGB;
}): void {
  frame.name = options.name;
  frame.layoutMode = options.direction;
  frame.primaryAxisSizingMode = "AUTO";
  frame.counterAxisSizingMode = "AUTO";
  frame.itemSpacing = options.spacing;

  if (options.padding !== undefined) {
    frame.paddingTop = options.padding;
    frame.paddingBottom = options.padding;
    frame.paddingLeft = options.padding;
    frame.paddingRight = options.padding;
  }

  if (options.bgColor) {
    frame.fills = [{ type: "SOLID", color: options.bgColor }];
  } else {
    frame.fills = [];
  }
}

/**
 * カラーパレットフレームを生成（Primitives + Semantic Tokens）
 */
export async function createColorPaletteFrame(): Promise<FrameNode> {
  var frame = figma.createFrame();
  applyFrameDefaults(frame, {
    name: "🎨 Color System",
    direction: "VERTICAL",
    spacing: LAYOUT.SECTION_GAP,
    padding: LAYOUT.PADDING,
    bgColor: COLORS_UI.WHITE
  });

  // メインタイトル
  var title = await createText("Color System", 32, "Bold");
  frame.appendChild(title);

  // 説明テキスト
  var description = await createText("2階層のカラーシステム: Primitives（材料）→ Semantic Tokens（使い方）", 14, "Regular");
  description.fills = [{ type: "SOLID", color: COLORS_UI.TEXT_SECONDARY }];
  frame.appendChild(description);

  // Section 1: Primitives
  var primitivesSection = await createPrimitivesSection();
  frame.appendChild(primitivesSection);

  // Section 2: Semantic Tokens
  var semanticSection = await createSemanticTokensSection();
  frame.appendChild(semanticSection);

  return frame;
}

/**
 * Primitivesセクション - Light/Dark両方を表示
 */
async function createPrimitivesSection(): Promise<FrameNode> {
  var section = figma.createFrame();
  applyFrameDefaults(section, {
    name: "Primitives",
    direction: "VERTICAL",
    spacing: 24,
    padding: 24,
    bgColor: COLORS_UI.LIGHT_GRAY
  });

  // セクションタイトル
  var sectionTitle = await createText("📦 Primitives (材料)", 24, "Bold");
  section.appendChild(sectionTitle);

  var sectionDesc = await createText("具体的な色の値を保存。Light版とDark版を個別に定義。", 12, "Regular");
  sectionDesc.fills = [{ type: "SOLID", color: COLORS_UI.TEXT_SECONDARY }];
  section.appendChild(sectionDesc);

  // スウォッチコンテナ
  var swatchContainer = figma.createFrame();
  swatchContainer.name = "Primitive Swatches";
  swatchContainer.layoutMode = "VERTICAL";
  swatchContainer.primaryAxisSizingMode = "AUTO";
  swatchContainer.counterAxisSizingMode = "AUTO";
  swatchContainer.itemSpacing = 16;
  swatchContainer.fills = [];

  for (var i = 0; i < COLORS.length; i++) {
    var colorPair = await createPrimitiveColorPair(COLORS[i]);
    swatchContainer.appendChild(colorPair);
  }

  section.appendChild(swatchContainer);
  return section;
}

/**
 * Primitive カラーペア（Light + Dark）を作成
 */
async function createPrimitiveColorPair(color: ColorDefinition): Promise<FrameNode> {
  var pairFrame = figma.createFrame();
  applyFrameDefaults(pairFrame, {
    name: "color/" + color.name,
    direction: "HORIZONTAL",
    spacing: 16
  });

  // Light版
  var lightSwatch = await createPrimitiveSwatch(color, "light", color.light);
  pairFrame.appendChild(lightSwatch);

  // Dark版
  var darkSwatch = await createPrimitiveSwatch(color, "dark", color.dark);
  pairFrame.appendChild(darkSwatch);

  return pairFrame;
}

/**
 * 個別のPrimitiveスウォッチ（Light or Dark）
 */
async function createPrimitiveSwatch(
  color: ColorDefinition,
  mode: "light" | "dark",
  rgb: { r: number; g: number; b: number; a: number }
): Promise<FrameNode> {
  var swatch = figma.createFrame();
  applyFrameDefaults(swatch, {
    name: "color/" + color.name + "/" + mode,
    direction: "VERTICAL",
    spacing: 8
  });

  // カラー表示
  var colorRect = figma.createRectangle();
  colorRect.name = "Color";
  colorRect.resize(LAYOUT.SWATCH_SIZE, LAYOUT.SWATCH_SIZE);
  colorRect.cornerRadius = 8;
  colorRect.fills = [{
    type: "SOLID",
    color: { r: rgb.r, g: rgb.g, b: rgb.b }
  }];
  colorRect.strokes = [{
    type: "SOLID",
    color: COLORS_UI.BORDER
  }];
  colorRect.strokeWeight = 1;
  swatch.appendChild(colorRect);

  // 変数名
  var varName = await createText("color/" + color.name + "/" + mode, 11, "Bold");
  varName.resize(LAYOUT.SWATCH_SIZE, varName.height);
  swatch.appendChild(varName);

  // モードラベル
  var modeLabel = await createText(mode === "light" ? "☀️ Light" : "🌙 Dark", 10, "Regular");
  modeLabel.resize(LAYOUT.SWATCH_SIZE, modeLabel.height);
  modeLabel.fills = [{ type: "SOLID", color: COLORS_UI.TEXT_SECONDARY }];
  swatch.appendChild(modeLabel);

  // HEX値
  var hexValue = rgbToHex(rgb.r, rgb.g, rgb.b);
  var hexLabel = await createText(hexValue.toUpperCase(), 10, "Regular");
  hexLabel.resize(LAYOUT.SWATCH_SIZE, hexLabel.height);
  hexLabel.fills = [{ type: "SOLID", color: COLORS_UI.TEXT_SECONDARY }];
  swatch.appendChild(hexLabel);

  return swatch;
}

/**
 * Semantic Tokensセクション
 */
async function createSemanticTokensSection(): Promise<FrameNode> {
  var section = figma.createFrame();
  applyFrameDefaults(section, {
    name: "Semantic Tokens",
    direction: "VERTICAL",
    spacing: 24,
    padding: 24,
    bgColor: COLORS_UI.LIGHT_GRAY
  });

  // セクションタイトル
  var sectionTitle = await createText("🏷️ Semantic Tokens (使い方)", 24, "Bold");
  section.appendChild(sectionTitle);

  var sectionDesc = await createText("実際のデザインで使用。モード切り替えで自動的に色が変わる。", 12, "Regular");
  sectionDesc.fills = [{ type: "SOLID", color: COLORS_UI.TEXT_SECONDARY }];
  section.appendChild(sectionDesc);

  // トークンコンテナ
  var tokenContainer = figma.createFrame();
  tokenContainer.name = "Semantic Tokens";
  tokenContainer.layoutMode = "HORIZONTAL";
  tokenContainer.layoutWrap = "WRAP";
  tokenContainer.primaryAxisSizingMode = "FIXED";
  tokenContainer.counterAxisSizingMode = "AUTO";
  tokenContainer.resize(
    (LAYOUT.SWATCH_SIZE * 2 + 32) * 3 + LAYOUT.SWATCH_GAP * 2,
    100
  );
  tokenContainer.itemSpacing = LAYOUT.SWATCH_GAP;
  tokenContainer.counterAxisSpacing = LAYOUT.SWATCH_GAP;
  tokenContainer.fills = [];

  for (var i = 0; i < COLORS.length; i++) {
    var tokenSwatch = await createSemanticTokenSwatch(COLORS[i]);
    tokenContainer.appendChild(tokenSwatch);
  }

  section.appendChild(tokenContainer);
  return section;
}

/**
 * 個別のSemantic Tokenスウォッチ
 */
async function createSemanticTokenSwatch(color: ColorDefinition): Promise<FrameNode> {
  var swatch = figma.createFrame();
  applyFrameDefaults(swatch, {
    name: "sys/" + color.name,
    direction: "VERTICAL",
    spacing: 8,
    padding: 12,
    bgColor: COLORS_UI.WHITE
  });
  swatch.cornerRadius = 8;

  // トークン名
  var tokenName = await createText("sys/" + color.name, 12, "Bold");
  swatch.appendChild(tokenName);

  // カラープレビュー（Variable参照付き）
  var colorRect = figma.createRectangle();
  colorRect.name = "Color";
  colorRect.resize(LAYOUT.SWATCH_SIZE * 2 + 16, 60);
  colorRect.cornerRadius = 6;

  // Variable参照を適用
  var variableId = getColorVariableId(color.name);
  if (variableId) {
    colorRect.fills = [{
      type: "SOLID",
      color: { r: color.light.r, g: color.light.g, b: color.light.b },
      boundVariables: {
        color: { type: "VARIABLE_ALIAS", id: variableId }
      }
    } as SolidPaint];
  } else {
    colorRect.fills = [{
      type: "SOLID",
      color: { r: color.light.r, g: color.light.g, b: color.light.b }
    }];
  }

  colorRect.strokes = [{
    type: "SOLID",
    color: COLORS_UI.BORDER
  }];
  colorRect.strokeWeight = 1;
  swatch.appendChild(colorRect);

  // 参照情報
  var refInfo = figma.createFrame();
  applyFrameDefaults(refInfo, {
    name: "References",
    direction: "VERTICAL",
    spacing: 4
  });

  var lightRef = await createText("→ color/" + color.name + "/light", 9, "Regular");
  lightRef.fills = [{ type: "SOLID", color: COLORS_UI.TEXT_SECONDARY }];
  refInfo.appendChild(lightRef);

  var darkRef = await createText("→ color/" + color.name + "/dark", 9, "Regular");
  darkRef.fills = [{ type: "SOLID", color: COLORS_UI.TEXT_SECONDARY }];
  refInfo.appendChild(darkRef);

  var autoSwitch = await createText("🔄 Auto-switching", 9, "Regular");
  autoSwitch.fills = [{ type: "SOLID", color: COLORS_UI.PRIMARY }];
  refInfo.appendChild(autoSwitch);

  swatch.appendChild(refInfo);

  return swatch;
}

/**
 * タイポグラフィフレームを生成
 */
export async function createTypographyFrame(): Promise<FrameNode> {
  var frame = figma.createFrame();
  applyFrameDefaults(frame, {
    name: "📝 Typography",
    direction: "VERTICAL",
    spacing: LAYOUT.SECTION_GAP,
    padding: LAYOUT.PADDING,
    bgColor: COLORS_UI.WHITE
  });

  // タイトル
  var title = await createText("Typography", 32, "Bold");
  frame.appendChild(title);

  // 各テキストスタイルのサンプル
  for (var i = 0; i < TEXT_STYLES.length; i++) {
    var styleRow = await createTypographyRow(TEXT_STYLES[i]);
    frame.appendChild(styleRow);
  }

  return frame;
}

/**
 * タイポグラフィの行を作成
 * Text Style参照を適用してClaude MCPで読み取り可能にする
 */
async function createTypographyRow(style: TextStyleDefinition): Promise<FrameNode> {
  var row = figma.createFrame();
  applyFrameDefaults(row, {
    name: style.name,
    direction: "HORIZONTAL",
    spacing: 32
  });
  row.counterAxisAlignItems = "CENTER";

  // スタイル情報
  var info = figma.createFrame();
  applyFrameDefaults(info, {
    name: "Info",
    direction: "VERTICAL",
    spacing: 4
  });
  info.counterAxisSizingMode = "FIXED";
  info.resize(200, 50);

  var styleName = await createText(style.name, 14, "Bold");
  info.appendChild(styleName);

  var styleDetails = await createText(
    style.fontFamily + " " + style.fontStyle + " / " + style.fontSize + "px",
    12,
    "Regular"
  );
  styleDetails.fills = [{ type: "SOLID", color: COLORS_UI.TEXT_SECONDARY }];
  info.appendChild(styleDetails);

  row.appendChild(info);

  // サンプルテキスト（Text Style参照を適用）
  try {
    await figma.loadFontAsync({ family: style.fontFamily, style: style.fontStyle });

    var sample = figma.createText();
    sample.name = "Sample";
    sample.characters = "デザインシステムのサンプルテキスト ABC 123";
    sample.fontName = { family: style.fontFamily, style: style.fontStyle };
    sample.fontSize = style.fontSize;
    sample.lineHeight = { value: style.lineHeight, unit: "PIXELS" };
    sample.fills = [{ type: "SOLID", color: COLORS_UI.TEXT_PRIMARY }];

    // Text Style参照を適用（Claude MCPで読み取り可能）
    var existingStyle = getExistingTextStyle(style.name);
    if (existingStyle) {
      sample.textStyleId = existingStyle.id;
    }

    row.appendChild(sample);
  } catch (e) {
    var fallback = await createText("(フォント読み込み失敗)", 14, "Regular");
    fallback.fills = [{ type: "SOLID", color: COLORS_UI.ERROR }];
    row.appendChild(fallback);
  }

  return row;
}

/**
 * スペーシングフレームを生成
 */
export async function createSpacingFrame(): Promise<FrameNode> {
  var frame = figma.createFrame();
  applyFrameDefaults(frame, {
    name: "📐 Spacing",
    direction: "VERTICAL",
    spacing: 24,
    padding: LAYOUT.PADDING,
    bgColor: COLORS_UI.WHITE
  });

  // タイトル
  var title = await createText("Spacing Scale", 32, "Bold");
  frame.appendChild(title);

  // スペーシングのビジュアル
  for (var i = 0; i < SPACING.length; i++) {
    var spacingRow = await createSpacingRow(SPACING[i]);
    frame.appendChild(spacingRow);
  }

  return frame;
}

/**
 * Spacing Variable IDを取得
 */
function getSpacingVariableId(spacingName: string): string | null {
  var primitivesCollection = getExistingCollection("Primitives");
  if (!primitivesCollection) return null;

  var variable = getExistingVariable(primitivesCollection, "spacing/" + spacingName);
  return variable ? variable.id : null;
}

/**
 * スペーシングの行を作成
 * Variable参照を適用してClaude MCPで読み取り可能にする
 */
async function createSpacingRow(spacing: { name: string; value: number }): Promise<FrameNode> {
  var row = figma.createFrame();
  applyFrameDefaults(row, {
    name: spacing.name,
    direction: "HORIZONTAL",
    spacing: 16
  });
  row.counterAxisAlignItems = "CENTER";

  // ラベル
  var label = await createText(spacing.name + " (" + spacing.value + "px)", 14, "Regular");
  label.resize(120, label.height);
  row.appendChild(label);

  // ビジュアル表示（Variable参照を適用）
  var bar = figma.createRectangle();
  bar.name = "Bar";
  bar.resize(spacing.value, 24);
  bar.cornerRadius = 4;
  bar.fills = [{ type: "SOLID", color: COLORS_UI.PRIMARY }];

  // Spacing Variableをバインド（Claude MCPで読み取り可能）
  var variableId = getSpacingVariableId(spacing.name);
  if (variableId) {
    var variable = await figma.variables.getVariableByIdAsync(variableId);
    if (variable) {
      bar.setBoundVariable("width", variable);
    }
  }

  row.appendChild(bar);

  return row;
}

/**
 * テキストノードを作成するヘルパー
 * 注: createDesignSystemDocumentation()で事前にフォントがロード済み
 */
async function createText(content: string, fontSize: number, fontStyle: string): Promise<TextNode> {
  var text = figma.createText();
  text.characters = content;
  text.fontName = { family: "Inter", style: fontStyle };
  text.fontSize = fontSize;
  text.fills = [{ type: "SOLID", color: COLORS_UI.TEXT_PRIMARY }];

  return text;
}

// ボタンバリエーション定義
var BUTTON_VARIANTS = [
  { type: "Primary", state: "Default", bgColor: "primary", textColor: "text-on-accent" },
  { type: "Primary", state: "Hover", bgColor: "primary-dark", textColor: "text-on-accent" },
  { type: "Secondary", state: "Default", bgColor: "bg-surface", textColor: "text-primary" },
  { type: "Secondary", state: "Hover", bgColor: "bg-elevated", textColor: "text-primary" },
  { type: "Outline", state: "Default", bgColor: null, textColor: "primary", border: "primary" },
  { type: "Ghost", state: "Default", bgColor: null, textColor: "primary" }
];

/**
 * ボタンコンポーネントセットを生成
 * Variable参照を適用してClaude MCPで読み取り可能にする
 */
export async function createButtonsFrame(): Promise<FrameNode> {
  var frame = figma.createFrame();
  applyFrameDefaults(frame, {
    name: "🔘 Buttons",
    direction: "VERTICAL",
    spacing: LAYOUT.SECTION_GAP,
    padding: LAYOUT.PADDING,
    bgColor: COLORS_UI.WHITE
  });

  // タイトル
  var title = await createText("Buttons", 32, "Bold");
  frame.appendChild(title);

  // ボタンコンテナ
  var buttonsContainer = figma.createFrame();
  applyFrameDefaults(buttonsContainer, {
    name: "Button Variants",
    direction: "HORIZONTAL",
    spacing: 24
  });
  buttonsContainer.layoutWrap = "WRAP";
  buttonsContainer.counterAxisSpacing = 24;

  for (var i = 0; i < BUTTON_VARIANTS.length; i++) {
    var buttonFrame = await createButtonVariant(BUTTON_VARIANTS[i]);
    buttonsContainer.appendChild(buttonFrame);
  }

  frame.appendChild(buttonsContainer);

  return frame;
}

/**
 * 個別のボタンバリアントを作成
 */
async function createButtonVariant(variant: {
  type: string;
  state: string;
  bgColor: string | null;
  textColor: string;
  border?: string;
}): Promise<FrameNode> {
  var container = figma.createFrame();
  applyFrameDefaults(container, {
    name: variant.type + " / " + variant.state,
    direction: "VERTICAL",
    spacing: 8
  });

  // ボタン本体
  var button = figma.createFrame();
  button.name = "Button";
  button.layoutMode = "HORIZONTAL";
  button.primaryAxisSizingMode = "AUTO";
  button.counterAxisSizingMode = "AUTO";
  button.paddingTop = 12;
  button.paddingBottom = 12;
  button.paddingLeft = 24;
  button.paddingRight = 24;
  button.cornerRadius = 8;
  button.itemSpacing = 8;

  // 背景色にVariable参照を適用
  if (variant.bgColor) {
    button.fills = [createBoundSolidPaint(variant.bgColor, { r: 0.9, g: 0.9, b: 0.9 })];
  } else {
    button.fills = [];
  }

  // ボーダーにVariable参照を適用
  if (variant.border) {
    button.strokes = [createBoundSolidPaint(variant.border, COLORS_UI.PRIMARY)];
    button.strokeWeight = 2;
  }

  // ボタンテキスト
  await figma.loadFontAsync({ family: "Inter", style: "Bold" });
  var buttonText = figma.createText();
  buttonText.name = "Label";
  buttonText.characters = "ボタン";
  buttonText.fontName = { family: "Inter", style: "Bold" };
  buttonText.fontSize = 16;

  // テキスト色にVariable参照を適用
  buttonText.fills = [createBoundSolidPaint(variant.textColor, COLORS_UI.WHITE)];

  button.appendChild(buttonText);
  container.appendChild(button);

  // バリアント名ラベル
  var variantLabel = await createText(variant.type + " / " + variant.state, 12, "Regular");
  variantLabel.fills = [{ type: "SOLID", color: COLORS_UI.TEXT_SECONDARY }];
  container.appendChild(variantLabel);

  return container;
}

/**
 * エフェクトフレームを生成
 */
export async function createEffectsFrame(): Promise<FrameNode> {
  var frame = figma.createFrame();
  applyFrameDefaults(frame, {
    name: "✨ Effects",
    direction: "VERTICAL",
    spacing: 32,
    padding: LAYOUT.PADDING,
    bgColor: COLORS_UI.WHITE
  });

  // タイトル
  var title = await createText("Effects / Shadows", 32, "Bold");
  frame.appendChild(title);

  // シャドウサンプルコンテナ
  var shadowContainer = figma.createFrame();
  applyFrameDefaults(shadowContainer, {
    name: "Shadow Samples",
    direction: "HORIZONTAL",
    spacing: 32
  });

  // シャドウバリエーション
  var shadows = [
    { name: "Shadow / Small", blur: 4, y: 2, spread: 0, opacity: 0.1 },
    { name: "Shadow / Medium", blur: 8, y: 4, spread: 0, opacity: 0.15 },
    { name: "Shadow / Large", blur: 16, y: 8, spread: 0, opacity: 0.2 }
  ];

  for (var i = 0; i < shadows.length; i++) {
    var shadowCard = await createShadowCard(shadows[i]);
    shadowContainer.appendChild(shadowCard);
  }

  frame.appendChild(shadowContainer);

  return frame;
}

/**
 * シャドウカードを作成
 */
async function createShadowCard(shadow: {
  name: string;
  blur: number;
  y: number;
  spread: number;
  opacity: number;
}): Promise<FrameNode> {
  var container = figma.createFrame();
  applyFrameDefaults(container, {
    name: shadow.name,
    direction: "VERTICAL",
    spacing: 12
  });
  container.counterAxisAlignItems = "CENTER";

  // カード（シャドウ適用）
  var card = figma.createRectangle();
  card.name = "Card";
  card.resize(120, 80);
  card.cornerRadius = 8;
  card.fills = [{ type: "SOLID", color: COLORS_UI.WHITE }];
  card.effects = [{
    type: "DROP_SHADOW",
    color: { r: 0, g: 0, b: 0, a: shadow.opacity },
    offset: { x: 0, y: shadow.y },
    radius: shadow.blur,
    spread: shadow.spread,
    visible: true,
    blendMode: "NORMAL"
  }];

  // Effect Styleを作成・適用（存在する場合）
  var effectStyles = await figma.getLocalEffectStylesAsync();
  var existingStyle = effectStyles.find(function(s) { return s.name === shadow.name; });
  if (existingStyle) {
    card.effectStyleId = existingStyle.id;
  }

  container.appendChild(card);

  // ラベル
  var label = await createText(shadow.name.replace("Shadow / ", ""), 14, "Bold");
  container.appendChild(label);

  // スペック情報
  var spec = await createText("blur: " + shadow.blur + "px, y: " + shadow.y + "px", 10, "Regular");
  spec.fills = [{ type: "SOLID", color: COLORS_UI.TEXT_SECONDARY }];
  container.appendChild(spec);

  return container;
}

/**
 * すべてのフレームを含むメインフレームを生成
 */
export async function createDesignSystemDocumentation(): Promise<FrameNode> {
  // フレーム生成に必要なフォントを一度だけロード
  await Promise.all([
    figma.loadFontAsync({ family: "Inter", style: "Regular" }),
    figma.loadFontAsync({ family: "Inter", style: "Bold" })
  ]);

  var mainFrame = figma.createFrame();
  applyFrameDefaults(mainFrame, {
    name: "🎨 Design System",
    direction: "VERTICAL",
    spacing: LAYOUT.SECTION_GAP,
    padding: LAYOUT.PADDING,
    bgColor: COLORS_UI.LIGHT_GRAY
  });

  // 各セクションを追加
  var colorFrame = await createColorPaletteFrame();
  mainFrame.appendChild(colorFrame);

  var typographyFrame = await createTypographyFrame();
  mainFrame.appendChild(typographyFrame);

  var buttonsFrame = await createButtonsFrame();
  mainFrame.appendChild(buttonsFrame);

  var spacingFrame = await createSpacingFrame();
  mainFrame.appendChild(spacingFrame);

  var effectsFrame = await createEffectsFrame();
  mainFrame.appendChild(effectsFrame);

  return mainFrame;
}
