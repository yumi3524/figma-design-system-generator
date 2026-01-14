var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/constants/colors.ts
var COLORS = [
  // プライマリーカラー
  {
    name: "primary",
    label: "\u30D7\u30E9\u30A4\u30DE\u30EA\u30FC\u30D6\u30EB\u30FC",
    light: { r: 0.2, g: 0.4, b: 0.8, a: 1 },
    dark: { r: 0.4, g: 0.6, b: 1, a: 1 }
  },
  {
    name: "primary-light",
    label: "\u30E9\u30A4\u30C8\u30D6\u30EB\u30FC",
    light: { r: 0.4, g: 0.6, b: 0.9, a: 1 },
    dark: { r: 0.5, g: 0.7, b: 1, a: 1 }
  },
  {
    name: "primary-dark",
    label: "\u30C0\u30FC\u30AF\u30D6\u30EB\u30FC",
    light: { r: 0.1, g: 0.2, b: 0.6, a: 1 },
    dark: { r: 0.3, g: 0.5, b: 0.9, a: 1 }
  },
  // アクセントカラー
  {
    name: "accent",
    label: "\u30A2\u30AF\u30BB\u30F3\u30C8\u30AA\u30EC\u30F3\u30B8",
    light: { r: 0.9, g: 0.5, b: 0.2, a: 1 },
    dark: { r: 1, g: 0.6, b: 0.3, a: 1 }
  },
  // 背景カラー
  {
    name: "bg-primary",
    label: "\u80CC\u666F\u30D7\u30E9\u30A4\u30DE\u30EA\u30FC",
    light: { r: 1, g: 1, b: 1, a: 1 },
    dark: { r: 0.1, g: 0.1, b: 0.1, a: 1 }
  },
  {
    name: "bg-surface",
    label: "\u30B5\u30FC\u30D5\u30A7\u30B9\u80CC\u666F",
    light: { r: 0.98, g: 0.98, b: 0.98, a: 1 },
    dark: { r: 0.15, g: 0.15, b: 0.15, a: 1 }
  },
  {
    name: "bg-elevated",
    label: "\u6D6E\u304D\u4E0A\u304C\u308A\u80CC\u666F",
    light: { r: 0.96, g: 0.96, b: 0.96, a: 1 },
    dark: { r: 0.2, g: 0.2, b: 0.2, a: 1 }
  },
  // ボーダーカラー
  {
    name: "border-default",
    label: "\u30C7\u30D5\u30A9\u30EB\u30C8\u30DC\u30FC\u30C0\u30FC",
    light: { r: 0.9, g: 0.9, b: 0.9, a: 1 },
    dark: { r: 0.25, g: 0.25, b: 0.25, a: 1 }
  },
  {
    name: "border-subtle",
    label: "\u30B5\u30D6\u30C8\u30EB\u30DC\u30FC\u30C0\u30FC",
    light: { r: 0.93, g: 0.93, b: 0.93, a: 1 },
    dark: { r: 0.18, g: 0.18, b: 0.18, a: 1 }
  },
  // テキストカラー
  {
    name: "text-primary",
    label: "\u30D7\u30E9\u30A4\u30DE\u30EA\u30FC\u30C6\u30AD\u30B9\u30C8",
    light: { r: 0.15, g: 0.15, b: 0.15, a: 1 },
    dark: { r: 0.95, g: 0.95, b: 0.95, a: 1 }
  },
  {
    name: "text-secondary",
    label: "\u30BB\u30AB\u30F3\u30C0\u30EA\u30FC\u30C6\u30AD\u30B9\u30C8",
    light: { r: 0.45, g: 0.45, b: 0.45, a: 1 },
    dark: { r: 0.7, g: 0.7, b: 0.7, a: 1 }
  },
  {
    name: "text-muted",
    label: "\u30DF\u30E5\u30FC\u30C8\u30C6\u30AD\u30B9\u30C8",
    light: { r: 0.6, g: 0.6, b: 0.6, a: 1 },
    dark: { r: 0.5, g: 0.5, b: 0.5, a: 1 }
  },
  {
    name: "text-on-accent",
    label: "\u30A2\u30AF\u30BB\u30F3\u30C8\u4E0A\u306E\u30C6\u30AD\u30B9\u30C8",
    light: { r: 1, g: 1, b: 1, a: 1 },
    dark: { r: 1, g: 1, b: 1, a: 1 }
  },
  // セマンティックカラー
  {
    name: "success",
    label: "\u6210\u529F\u30B0\u30EA\u30FC\u30F3",
    light: { r: 0.2, g: 0.6, b: 0.3, a: 1 },
    dark: { r: 0.3, g: 0.7, b: 0.4, a: 1 }
  },
  {
    name: "warning",
    label: "\u8B66\u544A\u30A4\u30A8\u30ED\u30FC",
    light: { r: 0.9, g: 0.7, b: 0.2, a: 1 },
    dark: { r: 1, g: 0.8, b: 0.3, a: 1 }
  },
  {
    name: "error",
    label: "\u30A8\u30E9\u30FC\u30EC\u30C3\u30C9",
    light: { r: 0.8, g: 0.2, b: 0.2, a: 1 },
    dark: { r: 0.9, g: 0.3, b: 0.3, a: 1 }
  }
];

// src/constants/spacing.ts
var SPACING = [
  { name: "space-1", value: 4 },
  { name: "space-2", value: 8 },
  { name: "space-3", value: 12 },
  { name: "space-4", value: 16 },
  { name: "space-5", value: 24 },
  { name: "space-6", value: 32 },
  { name: "space-8", value: 48 },
  { name: "space-10", value: 64 },
  { name: "space-12", value: 80 },
  { name: "space-16", value: 128 }
];

// src/constants/typography.ts
var TYPOGRAPHY = [
  { name: "text-xs", value: 12 },
  { name: "text-sm", value: 14 },
  { name: "text-base", value: 16 },
  { name: "text-lg", value: 18 },
  { name: "text-xl", value: 20 },
  { name: "text-2xl", value: 24 },
  { name: "text-3xl", value: 32 },
  { name: "text-4xl", value: 40 },
  { name: "text-5xl", value: 48 }
];
var BORDER_RADIUS = [
  { name: "radius-none", value: 0 },
  { name: "radius-sm", value: 4 },
  { name: "radius-md", value: 8 },
  { name: "radius-lg", value: 16 },
  { name: "radius-xl", value: 24 },
  { name: "radius-full", value: 9999 }
];

// src/constants/text-styles.ts
var TEXT_STYLES = [
  {
    name: "Heading/H1",
    fontFamily: "Inter",
    fontStyle: "Bold",
    fontSize: 48,
    lineHeight: 56,
    letterSpacing: 0
  },
  {
    name: "Heading/H2",
    fontFamily: "Inter",
    fontStyle: "Bold",
    fontSize: 36,
    lineHeight: 44,
    letterSpacing: 0
  },
  {
    name: "Heading/H3",
    fontFamily: "Inter",
    fontStyle: "Bold",
    fontSize: 24,
    lineHeight: 32,
    letterSpacing: 0
  },
  {
    name: "Body/Base",
    fontFamily: "Inter",
    fontStyle: "Regular",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0
  },
  {
    name: "Body/Small",
    fontFamily: "Inter",
    fontStyle: "Regular",
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0
  },
  {
    name: "Caption",
    fontFamily: "Inter",
    fontStyle: "Regular",
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0
  }
];

// src/utils/helpers.ts
function getExistingCollection(name) {
  const collections = figma.variables.getLocalVariableCollections();
  return collections.find(function(c) {
    return c.name === name;
  }) || null;
}
function getExistingVariable(collection, name) {
  const variables = figma.variables.getLocalVariables();
  return variables.find(function(v) {
    return v.variableCollectionId === collection.id && v.name === name;
  }) || null;
}
function getExistingTextStyle(name) {
  const textStyles = figma.getLocalTextStyles();
  return textStyles.find(function(s) {
    return s.name === name;
  }) || null;
}

// src/generators/frame-generator.ts
var LAYOUT = {
  SWATCH_SIZE: 80,
  SWATCH_GAP: 16,
  SECTION_GAP: 48,
  PADDING: 40,
  LABEL_HEIGHT: 24,
  COLORS_PER_ROW: 5
};
var COLORS_UI = {
  WHITE: { r: 1, g: 1, b: 1 },
  LIGHT_GRAY: { r: 0.97, g: 0.97, b: 0.97 },
  BORDER: { r: 0.9, g: 0.9, b: 0.9 },
  TEXT_PRIMARY: { r: 0.1, g: 0.1, b: 0.1 },
  TEXT_SECONDARY: { r: 0.5, g: 0.5, b: 0.5 },
  PRIMARY: { r: 0.2, g: 0.4, b: 0.8 },
  ERROR: { r: 0.8, g: 0.2, b: 0.2 }
};
function rgbToHex(r, g, b) {
  var toHex = function(value) {
    var hex = Math.round(value * 255).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };
  return "#" + toHex(r) + toHex(g) + toHex(b);
}
function getColorVariableId(colorName) {
  var tokensCollection = getExistingCollection("Tokens");
  if (!tokensCollection) return null;
  var variable = getExistingVariable(tokensCollection, "sys/" + colorName);
  return variable ? variable.id : null;
}
function getColorRgb(colorName, fallback) {
  var colorDef = COLORS.find(function(c) {
    return c.name === colorName;
  });
  if (colorDef) {
    return { r: colorDef.light.r, g: colorDef.light.g, b: colorDef.light.b };
  }
  return fallback;
}
function createBoundSolidPaint(colorName, fallbackColor) {
  var variableId = getColorVariableId(colorName);
  var rgb = getColorRgb(colorName, fallbackColor);
  if (variableId) {
    return {
      type: "SOLID",
      color: rgb,
      boundVariables: {
        color: { type: "VARIABLE_ALIAS", id: variableId }
      }
    };
  }
  return { type: "SOLID", color: rgb };
}
function applyFrameDefaults(frame, options) {
  frame.name = options.name;
  frame.layoutMode = options.direction;
  frame.primaryAxisSizingMode = "AUTO";
  frame.counterAxisSizingMode = "AUTO";
  frame.itemSpacing = options.spacing;
  if (options.padding !== void 0) {
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
function createColorPaletteFrame() {
  return __async(this, null, function* () {
    var frame = figma.createFrame();
    applyFrameDefaults(frame, {
      name: "\u{1F3A8} Color Palette",
      direction: "VERTICAL",
      spacing: LAYOUT.SECTION_GAP,
      padding: LAYOUT.PADDING,
      bgColor: COLORS_UI.WHITE
    });
    var title = yield createText("Color Palette", 32, "Bold");
    frame.appendChild(title);
    var categories = groupColorsByCategory(COLORS);
    for (var categoryName in categories) {
      if (categories.hasOwnProperty(categoryName)) {
        var categoryColors = categories[categoryName];
        var section = yield createColorSection(categoryName, categoryColors);
        frame.appendChild(section);
      }
    }
    return frame;
  });
}
function groupColorsByCategory(colors) {
  var categories = {
    "Primary": [],
    "Background": [],
    "Border": [],
    "Text": [],
    "Semantic": []
  };
  for (var i = 0; i < colors.length; i++) {
    var color = colors[i];
    if (color.name.indexOf("primary") === 0 || color.name === "accent") {
      categories["Primary"].push(color);
    } else if (color.name.indexOf("bg-") === 0) {
      categories["Background"].push(color);
    } else if (color.name.indexOf("border-") === 0) {
      categories["Border"].push(color);
    } else if (color.name.indexOf("text-") === 0) {
      categories["Text"].push(color);
    } else {
      categories["Semantic"].push(color);
    }
  }
  return categories;
}
function createColorSection(name, colors) {
  return __async(this, null, function* () {
    var section = figma.createFrame();
    applyFrameDefaults(section, {
      name,
      direction: "VERTICAL",
      spacing: 16
    });
    var sectionTitle = yield createText(name, 18, "Bold");
    section.appendChild(sectionTitle);
    var swatchContainer = figma.createFrame();
    swatchContainer.name = "Swatches";
    swatchContainer.layoutMode = "HORIZONTAL";
    swatchContainer.layoutWrap = "WRAP";
    swatchContainer.primaryAxisSizingMode = "FIXED";
    swatchContainer.counterAxisSizingMode = "AUTO";
    swatchContainer.resize(
      (LAYOUT.SWATCH_SIZE + LAYOUT.SWATCH_GAP) * LAYOUT.COLORS_PER_ROW - LAYOUT.SWATCH_GAP,
      100
    );
    swatchContainer.itemSpacing = LAYOUT.SWATCH_GAP;
    swatchContainer.counterAxisSpacing = LAYOUT.SWATCH_GAP;
    swatchContainer.fills = [];
    for (var i = 0; i < colors.length; i++) {
      var swatch = yield createColorSwatch(colors[i]);
      swatchContainer.appendChild(swatch);
    }
    section.appendChild(swatchContainer);
    return section;
  });
}
function createColorSwatch(color) {
  return __async(this, null, function* () {
    var swatch = figma.createFrame();
    applyFrameDefaults(swatch, {
      name: color.name,
      direction: "VERTICAL",
      spacing: 8
    });
    var colorRect = figma.createRectangle();
    colorRect.name = "Color";
    colorRect.resize(LAYOUT.SWATCH_SIZE, LAYOUT.SWATCH_SIZE);
    colorRect.cornerRadius = 8;
    var variableId = getColorVariableId(color.name);
    if (variableId) {
      colorRect.fills = [{
        type: "SOLID",
        color: { r: color.light.r, g: color.light.g, b: color.light.b },
        boundVariables: {
          color: { type: "VARIABLE_ALIAS", id: variableId }
        }
      }];
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
    var nameLabel = yield createText(color.name, 12, "Bold");
    nameLabel.resize(LAYOUT.SWATCH_SIZE, nameLabel.height);
    swatch.appendChild(nameLabel);
    var jpLabel = yield createText(color.label, 10, "Regular");
    jpLabel.resize(LAYOUT.SWATCH_SIZE, jpLabel.height);
    jpLabel.fills = [{ type: "SOLID", color: COLORS_UI.TEXT_SECONDARY }];
    swatch.appendChild(jpLabel);
    var hexValue = rgbToHex(color.light.r, color.light.g, color.light.b);
    var hexLabel = yield createText(hexValue.toUpperCase(), 10, "Regular");
    hexLabel.resize(LAYOUT.SWATCH_SIZE, hexLabel.height);
    hexLabel.fills = [{ type: "SOLID", color: COLORS_UI.TEXT_SECONDARY }];
    swatch.appendChild(hexLabel);
    return swatch;
  });
}
function createTypographyFrame() {
  return __async(this, null, function* () {
    var frame = figma.createFrame();
    applyFrameDefaults(frame, {
      name: "\u{1F4DD} Typography",
      direction: "VERTICAL",
      spacing: LAYOUT.SECTION_GAP,
      padding: LAYOUT.PADDING,
      bgColor: COLORS_UI.WHITE
    });
    var title = yield createText("Typography", 32, "Bold");
    frame.appendChild(title);
    for (var i = 0; i < TEXT_STYLES.length; i++) {
      var styleRow = yield createTypographyRow(TEXT_STYLES[i]);
      frame.appendChild(styleRow);
    }
    return frame;
  });
}
function createTypographyRow(style) {
  return __async(this, null, function* () {
    var row = figma.createFrame();
    applyFrameDefaults(row, {
      name: style.name,
      direction: "HORIZONTAL",
      spacing: 32
    });
    row.counterAxisAlignItems = "CENTER";
    var info = figma.createFrame();
    applyFrameDefaults(info, {
      name: "Info",
      direction: "VERTICAL",
      spacing: 4
    });
    info.counterAxisSizingMode = "FIXED";
    info.resize(200, 50);
    var styleName = yield createText(style.name, 14, "Bold");
    info.appendChild(styleName);
    var styleDetails = yield createText(
      style.fontFamily + " " + style.fontStyle + " / " + style.fontSize + "px",
      12,
      "Regular"
    );
    styleDetails.fills = [{ type: "SOLID", color: COLORS_UI.TEXT_SECONDARY }];
    info.appendChild(styleDetails);
    row.appendChild(info);
    try {
      yield figma.loadFontAsync({ family: style.fontFamily, style: style.fontStyle });
      var sample = figma.createText();
      sample.name = "Sample";
      sample.characters = "\u5FC3\u3068\u8EAB\u4F53\u3092\u3001\u3084\u3055\u3057\u304F\u307B\u3069\u304F\u3002 ABC 123";
      sample.fontName = { family: style.fontFamily, style: style.fontStyle };
      sample.fontSize = style.fontSize;
      sample.lineHeight = { value: style.lineHeight, unit: "PIXELS" };
      sample.fills = [{ type: "SOLID", color: COLORS_UI.TEXT_PRIMARY }];
      var existingStyle = getExistingTextStyle(style.name);
      if (existingStyle) {
        sample.textStyleId = existingStyle.id;
      }
      row.appendChild(sample);
    } catch (e) {
      var fallback = yield createText("(\u30D5\u30A9\u30F3\u30C8\u8AAD\u307F\u8FBC\u307F\u5931\u6557)", 14, "Regular");
      fallback.fills = [{ type: "SOLID", color: COLORS_UI.ERROR }];
      row.appendChild(fallback);
    }
    return row;
  });
}
function createSpacingFrame() {
  return __async(this, null, function* () {
    var frame = figma.createFrame();
    applyFrameDefaults(frame, {
      name: "\u{1F4D0} Spacing",
      direction: "VERTICAL",
      spacing: 24,
      padding: LAYOUT.PADDING,
      bgColor: COLORS_UI.WHITE
    });
    var title = yield createText("Spacing Scale", 32, "Bold");
    frame.appendChild(title);
    for (var i = 0; i < SPACING.length; i++) {
      var spacingRow = yield createSpacingRow(SPACING[i]);
      frame.appendChild(spacingRow);
    }
    return frame;
  });
}
function getSpacingVariableId(spacingName) {
  var primitivesCollection = getExistingCollection("Primitives");
  if (!primitivesCollection) return null;
  var variable = getExistingVariable(primitivesCollection, "spacing/" + spacingName);
  return variable ? variable.id : null;
}
function createSpacingRow(spacing) {
  return __async(this, null, function* () {
    var row = figma.createFrame();
    applyFrameDefaults(row, {
      name: spacing.name,
      direction: "HORIZONTAL",
      spacing: 16
    });
    row.counterAxisAlignItems = "CENTER";
    var label = yield createText(spacing.name + " (" + spacing.value + "px)", 14, "Regular");
    label.resize(120, label.height);
    row.appendChild(label);
    var bar = figma.createRectangle();
    bar.name = "Bar";
    bar.resize(spacing.value, 24);
    bar.cornerRadius = 4;
    bar.fills = [{ type: "SOLID", color: COLORS_UI.PRIMARY }];
    var variableId = getSpacingVariableId(spacing.name);
    if (variableId) {
      var variable = yield figma.variables.getVariableByIdAsync(variableId);
      if (variable) {
        bar.setBoundVariable("width", variable);
      }
    }
    row.appendChild(bar);
    return row;
  });
}
function createText(content, fontSize, fontStyle) {
  return __async(this, null, function* () {
    yield figma.loadFontAsync({ family: "Inter", style: fontStyle });
    var text = figma.createText();
    text.characters = content;
    text.fontName = { family: "Inter", style: fontStyle };
    text.fontSize = fontSize;
    text.fills = [{ type: "SOLID", color: COLORS_UI.TEXT_PRIMARY }];
    return text;
  });
}
var BUTTON_VARIANTS = [
  { type: "Primary", state: "Default", bgColor: "primary", textColor: "text-on-accent" },
  { type: "Primary", state: "Hover", bgColor: "primary-dark", textColor: "text-on-accent" },
  { type: "Secondary", state: "Default", bgColor: "bg-surface", textColor: "text-primary" },
  { type: "Secondary", state: "Hover", bgColor: "bg-elevated", textColor: "text-primary" },
  { type: "Outline", state: "Default", bgColor: null, textColor: "primary", border: "primary" },
  { type: "Ghost", state: "Default", bgColor: null, textColor: "primary" }
];
function createButtonsFrame() {
  return __async(this, null, function* () {
    var frame = figma.createFrame();
    applyFrameDefaults(frame, {
      name: "\u{1F518} Buttons",
      direction: "VERTICAL",
      spacing: LAYOUT.SECTION_GAP,
      padding: LAYOUT.PADDING,
      bgColor: COLORS_UI.WHITE
    });
    var title = yield createText("Buttons", 32, "Bold");
    frame.appendChild(title);
    var buttonsContainer = figma.createFrame();
    applyFrameDefaults(buttonsContainer, {
      name: "Button Variants",
      direction: "HORIZONTAL",
      spacing: 24
    });
    buttonsContainer.layoutWrap = "WRAP";
    buttonsContainer.counterAxisSpacing = 24;
    for (var i = 0; i < BUTTON_VARIANTS.length; i++) {
      var buttonFrame = yield createButtonVariant(BUTTON_VARIANTS[i]);
      buttonsContainer.appendChild(buttonFrame);
    }
    frame.appendChild(buttonsContainer);
    return frame;
  });
}
function createButtonVariant(variant) {
  return __async(this, null, function* () {
    var container = figma.createFrame();
    applyFrameDefaults(container, {
      name: variant.type + " / " + variant.state,
      direction: "VERTICAL",
      spacing: 8
    });
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
    if (variant.bgColor) {
      button.fills = [createBoundSolidPaint(variant.bgColor, { r: 0.9, g: 0.9, b: 0.9 })];
    } else {
      button.fills = [];
    }
    if (variant.border) {
      button.strokes = [createBoundSolidPaint(variant.border, COLORS_UI.PRIMARY)];
      button.strokeWeight = 2;
    }
    yield figma.loadFontAsync({ family: "Inter", style: "Bold" });
    var buttonText = figma.createText();
    buttonText.name = "Label";
    buttonText.characters = "\u30DC\u30BF\u30F3";
    buttonText.fontName = { family: "Inter", style: "Bold" };
    buttonText.fontSize = 16;
    buttonText.fills = [createBoundSolidPaint(variant.textColor, COLORS_UI.WHITE)];
    button.appendChild(buttonText);
    container.appendChild(button);
    var variantLabel = yield createText(variant.type + " / " + variant.state, 12, "Regular");
    variantLabel.fills = [{ type: "SOLID", color: COLORS_UI.TEXT_SECONDARY }];
    container.appendChild(variantLabel);
    return container;
  });
}
function createEffectsFrame() {
  return __async(this, null, function* () {
    var frame = figma.createFrame();
    applyFrameDefaults(frame, {
      name: "\u2728 Effects",
      direction: "VERTICAL",
      spacing: 32,
      padding: LAYOUT.PADDING,
      bgColor: COLORS_UI.WHITE
    });
    var title = yield createText("Effects / Shadows", 32, "Bold");
    frame.appendChild(title);
    var shadowContainer = figma.createFrame();
    applyFrameDefaults(shadowContainer, {
      name: "Shadow Samples",
      direction: "HORIZONTAL",
      spacing: 32
    });
    var shadows = [
      { name: "Shadow / Small", blur: 4, y: 2, spread: 0, opacity: 0.1 },
      { name: "Shadow / Medium", blur: 8, y: 4, spread: 0, opacity: 0.15 },
      { name: "Shadow / Large", blur: 16, y: 8, spread: 0, opacity: 0.2 }
    ];
    for (var i = 0; i < shadows.length; i++) {
      var shadowCard = yield createShadowCard(shadows[i]);
      shadowContainer.appendChild(shadowCard);
    }
    frame.appendChild(shadowContainer);
    return frame;
  });
}
function createShadowCard(shadow) {
  return __async(this, null, function* () {
    var container = figma.createFrame();
    applyFrameDefaults(container, {
      name: shadow.name,
      direction: "VERTICAL",
      spacing: 12
    });
    container.counterAxisAlignItems = "CENTER";
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
    var effectStyles = yield figma.getLocalEffectStylesAsync();
    var existingStyle = effectStyles.find(function(s) {
      return s.name === shadow.name;
    });
    if (existingStyle) {
      card.effectStyleId = existingStyle.id;
    }
    container.appendChild(card);
    var label = yield createText(shadow.name.replace("Shadow / ", ""), 14, "Bold");
    container.appendChild(label);
    var spec = yield createText("blur: " + shadow.blur + "px, y: " + shadow.y + "px", 10, "Regular");
    spec.fills = [{ type: "SOLID", color: COLORS_UI.TEXT_SECONDARY }];
    container.appendChild(spec);
    return container;
  });
}
function createDesignSystemDocumentation() {
  return __async(this, null, function* () {
    var mainFrame = figma.createFrame();
    applyFrameDefaults(mainFrame, {
      name: "\u{1F3A8} Design System",
      direction: "VERTICAL",
      spacing: LAYOUT.SECTION_GAP,
      padding: LAYOUT.PADDING,
      bgColor: COLORS_UI.LIGHT_GRAY
    });
    var colorFrame = yield createColorPaletteFrame();
    mainFrame.appendChild(colorFrame);
    var typographyFrame = yield createTypographyFrame();
    mainFrame.appendChild(typographyFrame);
    var buttonsFrame = yield createButtonsFrame();
    mainFrame.appendChild(buttonsFrame);
    var spacingFrame = yield createSpacingFrame();
    mainFrame.appendChild(spacingFrame);
    var effectsFrame = yield createEffectsFrame();
    mainFrame.appendChild(effectsFrame);
    return mainFrame;
  });
}

// src/code.ts
function main() {
  return __async(this, null, function* () {
    console.log("========================================");
    console.log("\u85E4\u5CA1\u937C\u7078\u6CBB\u7642\u9662 Design System Generator");
    console.log("========================================\n");
    try {
      console.log("1. Creating Primitives collection...");
      let primitivesCollection = getExistingCollection("Primitives");
      if (!primitivesCollection) {
        primitivesCollection = figma.variables.createVariableCollection("Primitives");
        console.log("   Created new Primitives collection");
      } else {
        console.log("   Using existing Primitives collection");
      }
      const primitivesDefaultMode = primitivesCollection.modes[0];
      console.log("\n2. Creating primitive color variables...");
      const primitiveColorVars = /* @__PURE__ */ new Map();
      for (const color of COLORS) {
        const lightName = `color/${color.name}/light`;
        let lightVar = getExistingVariable(primitivesCollection, lightName);
        if (!lightVar) {
          lightVar = figma.variables.createVariable(lightName, primitivesCollection, "COLOR");
          lightVar.setValueForMode(primitivesDefaultMode.modeId, color.light);
          console.log(`   Created: ${lightName} (${color.japaneseName})`);
        }
        const darkName = `color/${color.name}/dark`;
        let darkVar = getExistingVariable(primitivesCollection, darkName);
        if (!darkVar) {
          darkVar = figma.variables.createVariable(darkName, primitivesCollection, "COLOR");
          darkVar.setValueForMode(primitivesDefaultMode.modeId, color.dark);
          console.log(`   Created: ${darkName}`);
        }
        primitiveColorVars.set(color.name, { light: lightVar, dark: darkVar });
      }
      console.log("\n3. Creating spacing variables...");
      for (const space of SPACING) {
        const varName = `spacing/${space.name}`;
        let spaceVar = getExistingVariable(primitivesCollection, varName);
        if (!spaceVar) {
          spaceVar = figma.variables.createVariable(varName, primitivesCollection, "FLOAT");
          spaceVar.setValueForMode(primitivesDefaultMode.modeId, space.value);
          console.log(`   Created: ${varName} = ${space.value}px`);
        }
      }
      console.log("\n4. Creating typography variables...");
      for (const typo of TYPOGRAPHY) {
        const varName = `typography/${typo.name}`;
        let typoVar = getExistingVariable(primitivesCollection, varName);
        if (!typoVar) {
          typoVar = figma.variables.createVariable(varName, primitivesCollection, "FLOAT");
          typoVar.setValueForMode(primitivesDefaultMode.modeId, typo.value);
          console.log(`   Created: ${varName} = ${typo.value}px`);
        }
      }
      console.log("\n5. Creating border radius variables...");
      for (const radius of BORDER_RADIUS) {
        const varName = `radius/${radius.name}`;
        let radiusVar = getExistingVariable(primitivesCollection, varName);
        if (!radiusVar) {
          radiusVar = figma.variables.createVariable(varName, primitivesCollection, "FLOAT");
          radiusVar.setValueForMode(primitivesDefaultMode.modeId, radius.value);
          console.log(`   Created: ${varName} = ${radius.value}px`);
        }
      }
      console.log("\n6. Creating Tokens collection with Light/Dark modes...");
      let tokensCollection = getExistingCollection("Tokens");
      if (!tokensCollection) {
        tokensCollection = figma.variables.createVariableCollection("Tokens");
        console.log("   Created new Tokens collection");
      } else {
        console.log("   Using existing Tokens collection");
      }
      const existingModes = tokensCollection.modes;
      let lightModeId;
      let darkModeId;
      if (existingModes.length === 1) {
        tokensCollection.renameMode(existingModes[0].modeId, "Light");
        lightModeId = existingModes[0].modeId;
        darkModeId = tokensCollection.addMode("Dark");
        console.log("   Created Light and Dark modes");
      } else {
        const lightMode = existingModes.find(function(m) {
          return m.name === "Light";
        });
        const darkMode = existingModes.find(function(m) {
          return m.name === "Dark";
        });
        lightModeId = lightMode && lightMode.modeId ? lightMode.modeId : existingModes[0].modeId;
        if (darkMode && darkMode.modeId) {
          darkModeId = darkMode.modeId;
        } else if (existingModes[1]) {
          darkModeId = existingModes[1].modeId;
        } else {
          darkModeId = tokensCollection.addMode("Dark");
        }
        console.log("   Using existing Light and Dark modes");
      }
      console.log("\n7. Creating semantic token variables...");
      for (const color of COLORS) {
        const tokenName = `sys/${color.name}`;
        let tokenVar = getExistingVariable(tokensCollection, tokenName);
        const primitives = primitiveColorVars.get(color.name);
        if (!primitives) continue;
        if (!tokenVar) {
          tokenVar = figma.variables.createVariable(tokenName, tokensCollection, "COLOR");
          console.log(`   Created: ${tokenName}`);
        }
        tokenVar.setValueForMode(lightModeId, {
          type: "VARIABLE_ALIAS",
          id: primitives.light.id
        });
        tokenVar.setValueForMode(darkModeId, {
          type: "VARIABLE_ALIAS",
          id: primitives.dark.id
        });
      }
      console.log("\n8. Creating text styles...");
      for (var i = 0; i < TEXT_STYLES.length; i++) {
        var styleSpec = TEXT_STYLES[i];
        var existingStyle = getExistingTextStyle(styleSpec.name);
        if (!existingStyle) {
          try {
            yield figma.loadFontAsync({
              family: styleSpec.fontFamily,
              style: styleSpec.fontStyle
            });
            var textStyle = figma.createTextStyle();
            textStyle.name = styleSpec.name;
            textStyle.fontName = {
              family: styleSpec.fontFamily,
              style: styleSpec.fontStyle
            };
            textStyle.fontSize = styleSpec.fontSize;
            textStyle.lineHeight = {
              value: styleSpec.lineHeight,
              unit: "PIXELS"
            };
            textStyle.letterSpacing = {
              value: styleSpec.letterSpacing,
              unit: "PIXELS"
            };
            console.log("   Created: " + styleSpec.name);
          } catch (fontError) {
            console.log("   Warning: Could not load font for " + styleSpec.name + " - " + fontError);
          }
        } else {
          console.log("   Using existing: " + styleSpec.name);
        }
      }
      console.log("\n9. Creating design system documentation frames...");
      var docFrame = yield createDesignSystemDocumentation();
      figma.currentPage.appendChild(docFrame);
      figma.viewport.scrollAndZoomIntoView([docFrame]);
      console.log("   Created: Design System documentation frame");
      console.log("\n========================================");
      console.log("Design System generated successfully!");
      console.log("========================================");
      console.log("\nSummary:");
      console.log(`  - ${COLORS.length * 2} Primitive color variables`);
      console.log(`  - ${COLORS.length} Semantic color tokens`);
      console.log(`  - ${SPACING.length} Spacing variables`);
      console.log(`  - ${TYPOGRAPHY.length} Typography variables`);
      console.log(`  - ${BORDER_RADIUS.length} Border radius variables`);
      console.log(`  - ${TEXT_STYLES.length} Text styles`);
      console.log(`  - 2 Modes: Light & Dark`);
      console.log(`  - 1 Documentation frame with visual samples`);
      figma.closePlugin("Design System generated successfully! Check the Variables panel and the new documentation frame.");
    } catch (error) {
      console.error("Error:", error);
      figma.closePlugin(`Error: ${error}`);
    }
  });
}
main();
