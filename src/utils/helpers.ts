/// <reference types="@figma/plugin-typings" />

/**
 * Helper Functions - Figmaプラグイン用ユーティリティ
 * 藤岡鍼灸治療院デザインシステム
 */

/**
 * 既存のVariableCollectionを名前で検索
 */
export function getExistingCollection(name: string): VariableCollection | null {
  const collections = figma.variables.getLocalVariableCollections();
  return collections.find(function(c: VariableCollection) { 
    return c.name === name; 
  }) || null;
}

/**
 * 既存のVariableをコレクション内で名前検索
 */
export function getExistingVariable(
  collection: VariableCollection, 
  name: string
): Variable | null {
  const variables = figma.variables.getLocalVariables();
  return variables.find(function(v: Variable) {
    return v.variableCollectionId === collection.id && v.name === name;
  }) || null;
}

/**
 * 既存のText Styleを名前で検索
 */
export function getExistingTextStyle(name: string): TextStyle | null {
  const textStyles = figma.getLocalTextStyles();
  return textStyles.find(function(s: TextStyle) { 
    return s.name === name; 
  }) || null;
}
