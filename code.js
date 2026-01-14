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
  // Primary Colors
  {
    name: "primary",
    label: "Primary Blue",
    light: { r: 0.2, g: 0.4, b: 0.8, a: 1 },
    dark: { r: 0.4, g: 0.6, b: 1, a: 1 }
  },
  {
    name: "primary-light",
    label: "Light Blue",
    light: { r: 0.4, g: 0.6, b: 0.9, a: 1 },
    dark: { r: 0.5, g: 0.7, b: 1, a: 1 }
  },
  {
    name: "primary-dark",
    label: "Dark Blue",
    light: { r: 0.1, g: 0.2, b: 0.6, a: 1 },
    dark: { r: 0.3, g: 0.5, b: 0.9, a: 1 }
  },
  // Accent Colors
  {
    name: "accent",
    label: "Accent Orange",
    light: { r: 0.9, g: 0.5, b: 0.2, a: 1 },
    dark: { r: 1, g: 0.6, b: 0.3, a: 1 }
  },
  // Background Colors
  {
    name: "bg-primary",
    label: "Background Primary",
    light: { r: 1, g: 1, b: 1, a: 1 },
    dark: { r: 0.1, g: 0.1, b: 0.1, a: 1 }
  },
  {
    name: "bg-surface",
    label: "Surface Background",
    light: { r: 0.98, g: 0.98, b: 0.98, a: 1 },
    dark: { r: 0.15, g: 0.15, b: 0.15, a: 1 }
  },
  {
    name: "bg-elevated",
    label: "Elevated Background",
    light: { r: 0.96, g: 0.96, b: 0.96, a: 1 },
    dark: { r: 0.2, g: 0.2, b: 0.2, a: 1 }
  },
  // Border Colors
  {
    name: "border-default",
    label: "Default Border",
    light: { r: 0.9, g: 0.9, b: 0.9, a: 1 },
    dark: { r: 0.25, g: 0.25, b: 0.25, a: 1 }
  },
  {
    name: "border-subtle",
    label: "Subtle Border",
    light: { r: 0.93, g: 0.93, b: 0.93, a: 1 },
    dark: { r: 0.18, g: 0.18, b: 0.18, a: 1 }
  },
  // Text Colors
  {
    name: "text-primary",
    label: "Primary Text",
    light: { r: 0.15, g: 0.15, b: 0.15, a: 1 },
    dark: { r: 0.95, g: 0.95, b: 0.95, a: 1 }
  },
  {
    name: "text-secondary",
    label: "Secondary Text",
    light: { r: 0.45, g: 0.45, b: 0.45, a: 1 },
    dark: { r: 0.7, g: 0.7, b: 0.7, a: 1 }
  },
  {
    name: "text-muted",
    label: "Muted Text",
    light: { r: 0.6, g: 0.6, b: 0.6, a: 1 },
    dark: { r: 0.5, g: 0.5, b: 0.5, a: 1 }
  },
  {
    name: "text-on-accent",
    label: "Text on Accent",
    light: { r: 1, g: 1, b: 1, a: 1 },
    dark: { r: 1, g: 1, b: 1, a: 1 }
  },
  // Semantic Colors
  {
    name: "success",
    label: "Success Green",
    light: { r: 0.2, g: 0.6, b: 0.3, a: 1 },
    dark: { r: 0.3, g: 0.7, b: 0.4, a: 1 }
  },
  {
    name: "warning",
    label: "Warning Yellow",
    light: { r: 0.9, g: 0.7, b: 0.2, a: 1 },
    dark: { r: 1, g: 0.8, b: 0.3, a: 1 }
  },
  {
    name: "error",
    label: "Error Red",
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
      figma.closePlugin("Design System generated successfully! Check the Variables panel.");
    } catch (error) {
      console.error("Error:", error);
      figma.closePlugin(`Error: ${error}`);
    }
  });
}
main();
