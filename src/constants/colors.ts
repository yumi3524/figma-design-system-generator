/// <reference types="@figma/plugin-typings" />

/** HEX文字列をFigma RGB形式に変換（#RRGGBB → {r, g, b, a}） */
function hex(color: string): { r: number; g: number; b: number; a: number } {
  var c = color.replace("#", "");
  return {
    r: parseInt(c.substring(0, 2), 16) / 255,
    g: parseInt(c.substring(2, 4), 16) / 255,
    b: parseInt(c.substring(4, 6), 16) / 255,
    a: 1
  };
}

/**
 * カラー定義
 *
 * 使い方:
 * - name: Figma変数名（英語、ハイフン区切り）
 * - label: 日本語ラベル（ドキュメント用）
 * - light/dark: hex("#RRGGBB") でHEX値を指定
 */
export interface ColorDefinition {
  name: string;
  label: string;
  light: { r: number; g: number; b: number; a: number };
  dark: { r: number; g: number; b: number; a: number };
}

/** カラーパレット */
export const COLORS: ColorDefinition[] = [
  // Primary
  { name: "primary", label: "プライマリーブルー", light: hex("#3366CC"), dark: hex("#6699FF") },
  { name: "primary-light", label: "ライトブルー", light: hex("#6699E6"), dark: hex("#80B3FF") },
  { name: "primary-dark", label: "ダークブルー", light: hex("#1A3399"), dark: hex("#4D80E6") },

  // Accent
  { name: "accent", label: "アクセントオレンジ", light: hex("#E68033"), dark: hex("#FF994D") },

  // Background
  { name: "bg-primary", label: "背景プライマリー", light: hex("#FFFFFF"), dark: hex("#1A1A1A") },
  { name: "bg-surface", label: "サーフェス背景", light: hex("#FAFAFA"), dark: hex("#262626") },
  { name: "bg-elevated", label: "浮き上がり背景", light: hex("#F5F5F5"), dark: hex("#333333") },

  // Border
  { name: "border-default", label: "デフォルトボーダー", light: hex("#E6E6E6"), dark: hex("#404040") },
  { name: "border-subtle", label: "サブトルボーダー", light: hex("#EDEDED"), dark: hex("#2E2E2E") },

  // Text
  { name: "text-primary", label: "プライマリーテキスト", light: hex("#262626"), dark: hex("#F2F2F2") },
  { name: "text-secondary", label: "セカンダリーテキスト", light: hex("#737373"), dark: hex("#B3B3B3") },
  { name: "text-muted", label: "ミュートテキスト", light: hex("#999999"), dark: hex("#808080") },
  { name: "text-on-accent", label: "アクセント上のテキスト", light: hex("#FFFFFF"), dark: hex("#FFFFFF") },

  // Semantic
  { name: "success", label: "成功グリーン", light: hex("#33994D"), dark: hex("#4DB366") },
  { name: "warning", label: "警告イエロー", light: hex("#E6B333"), dark: hex("#FFCC4D") },
  { name: "error", label: "エラーレッド", light: hex("#CC3333"), dark: hex("#E64D4D") },
];
