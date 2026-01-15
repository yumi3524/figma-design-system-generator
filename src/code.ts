/// <reference types="@figma/plugin-typings" />

/**
 * Figma Design System Generator Plugin
 * デザインシステム自動生成プラグイン
 */

import { COLORS } from './constants/colors';
import { SPACING } from './constants/spacing';
import { TYPOGRAPHY, BORDER_RADIUS } from './constants/typography';
import { TEXT_STYLES } from './constants/text-styles';
import { getExistingCollection, getExistingVariable, getExistingTextStyle } from './utils/helpers';
import { createDesignSystemDocumentation } from './generators/frame-generator';

// UIのHTMLをインポート
// @ts-ignore - esbuild will inline this
import html from '../ui.html';

/**
 * 既存データのチェック
 */
function checkExistingData(): string[] {
  const existingItems: string[] = [];
  
  const primitives = getExistingCollection("Primitives");
  if (primitives) {
    existingItems.push("Primitives コレクション");
  }
  
  const tokens = getExistingCollection("Tokens");
  if (tokens) {
    existingItems.push("Tokens コレクション");
  }
  
  const textStyles = figma.getLocalTextStyles();
  const hasDesignSystemStyles = textStyles.some(s => 
    s.name.startsWith("Heading/") || 
    s.name.startsWith("Body/") || 
    s.name === "Caption"
  );
  
  if (hasDesignSystemStyles) {
    existingItems.push("テキストスタイル");
  }
  
  return existingItems;
}

/**
 * 既存データを削除
 */
function deleteExistingData() {
  console.log("Deleting existing design system...");
  
  // コレクションの削除
  const collections = figma.variables.getLocalVariableCollections();
  collections.forEach(c => {
    if (c.name === "Primitives" || c.name === "Tokens") {
      console.log(`   Removing collection: ${c.name}`);
      c.remove();
    }
  });
  
  // テキストスタイルの削除
  const textStyles = figma.getLocalTextStyles();
  textStyles.forEach(s => {
    if (s.name.startsWith("Heading/") || 
        s.name.startsWith("Body/") || 
        s.name === "Caption") {
      console.log(`   Removing text style: ${s.name}`);
      s.remove();
    }
  });
  
  console.log("Existing data deleted.\n");
}

/**
 * デザインシステム生成処理
 */
async function proceedWithGeneration(overwrite: boolean) {
  console.log("========================================");
  console.log("Design System Generator");
  console.log("========================================\n");

  try {
    // 上書きモードの場合、既存データを削除
    if (overwrite) {
      deleteExistingData();
    }

    // ----------------------------------------
    // Step 1: Create Primitives Collection
    // ----------------------------------------
    console.log("1. Creating Primitives collection...");
    let primitivesCollection = getExistingCollection("Primitives");
    if (!primitivesCollection) {
      primitivesCollection = figma.variables.createVariableCollection("Primitives");
      console.log("   Created new Primitives collection");
    } else {
      console.log("   Using existing Primitives collection");
    }
    const primitivesDefaultMode = primitivesCollection.modes[0];

    // ----------------------------------------
    // Step 2: Create Primitive Color Variables
    // ----------------------------------------
    console.log("\n2. Creating primitive color variables...");
    const primitiveColorVars: Map<string, { light: Variable; dark: Variable }> = new Map();

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

    // ----------------------------------------
    // Step 3: Create Spacing Variables
    // ----------------------------------------
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

    // ----------------------------------------
    // Step 4: Create Typography Variables
    // ----------------------------------------
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

    // ----------------------------------------
    // Step 5: Create Border Radius Variables
    // ----------------------------------------
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

    // ----------------------------------------
    // Step 6: Create Tokens Collection
    // ----------------------------------------
    console.log("\n6. Creating Tokens collection with Light/Dark modes...");
    let tokensCollection = getExistingCollection("Tokens");
    if (!tokensCollection) {
      tokensCollection = figma.variables.createVariableCollection("Tokens");
      console.log("   Created new Tokens collection");
    } else {
      console.log("   Using existing Tokens collection");
    }

    const existingModes = tokensCollection.modes;
    let lightModeId: string;
    let darkModeId: string;

    if (existingModes.length === 1) {
      tokensCollection.renameMode(existingModes[0].modeId, "Light");
      lightModeId = existingModes[0].modeId;
      darkModeId = tokensCollection.addMode("Dark");
      console.log("   Created Light and Dark modes");
    } else {
      const lightMode = existingModes.find(function(m: { modeId: string; name: string }) { 
        return m.name === "Light"; 
      });
      const darkMode = existingModes.find(function(m: { modeId: string; name: string }) { 
        return m.name === "Dark"; 
      });
      lightModeId = (lightMode && lightMode.modeId) ? lightMode.modeId : existingModes[0].modeId;
      if (darkMode && darkMode.modeId) {
        darkModeId = darkMode.modeId;
      } else if (existingModes[1]) {
        darkModeId = existingModes[1].modeId;
      } else {
        darkModeId = tokensCollection.addMode("Dark");
      }
      console.log("   Using existing Light and Dark modes");
    }

    // ----------------------------------------
    // Step 7: Create Semantic Token Variables
    // ----------------------------------------
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

    // ----------------------------------------
    // Step 8: Create Text Styles
    // ----------------------------------------
    console.log("\n8. Creating text styles...");
    for (var i = 0; i < TEXT_STYLES.length; i++) {
      var styleSpec = TEXT_STYLES[i];
      var existingStyle = getExistingTextStyle(styleSpec.name);

      if (!existingStyle) {
        try {
          await figma.loadFontAsync({
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

    // ----------------------------------------
    // Step 9: Create Design System Documentation Frames
    // ----------------------------------------
    console.log("\n9. Creating design system documentation frames...");
    var docFrame = await createDesignSystemDocumentation();

    // 現在のページに配置
    figma.currentPage.appendChild(docFrame);

    // ビューポートをフレームに移動
    figma.viewport.scrollAndZoomIntoView([docFrame]);

    console.log("   Created: Design System documentation frame");

    // ----------------------------------------
    // Complete!
    // ----------------------------------------
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
}

/**
 * メインエントリーポイント
 */
async function main() {
  // 既存データのチェック
  const existingItems = checkExistingData();
  
  if (existingItems.length > 0) {
    // 既存データがある場合、UIを表示
    figma.showUI(html, { width: 400, height: 350 });
    
    // UIに既存項目を送信
    figma.ui.postMessage({
      type: 'show-existing-items',
      items: existingItems
    });
    
    // UIからのメッセージを待つ
    figma.ui.onmessage = async (msg) => {
      if (msg.type === 'reuse') {
        figma.ui.close();
        await proceedWithGeneration(false);
      } else if (msg.type === 'overwrite') {
        figma.ui.close();
        await proceedWithGeneration(true);
      } else if (msg.type === 'cancel') {
        figma.closePlugin('キャンセルしました');
      }
    };
  } else {
    // 既存データなし → そのまま実行
    await proceedWithGeneration(false);
  }
}

main();
