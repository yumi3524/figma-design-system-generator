/// <reference types="@figma/plugin-typings" />

/**
 * カラー定義 - 汎用カラーパレット
 * 
 * デザインシステムに合わせてこのファイルをカスタマイズしてください。
 * 各カラーはLightモードとDarkモードの両方の値が必要です。
 */

export interface ColorDefinition {
  japaneseName: any;
  name: string;
  label: string;  // 人間が読める形のラベル
  light: { r: number; g: number; b: number; a: number };
  dark: { r: number; g: number; b: number; a: number };
}

/**
 * カラーパレット
 * 
 * ブランドカラーに合わせてこれらの値を編集してください。
 * RGB値は 0.0 から 1.0 の範囲です
 */
export const COLORS: ColorDefinition[] = [
  // プライマリーカラー
  {
    name: "primary",
    label: "プライマリーブルー",
    light: { r: 0.2, g: 0.4, b: 0.8, a: 1 },
    dark: { r: 0.4, g: 0.6, b: 1, a: 1 },
    japaneseName: undefined
  },
  {
    name: "primary-light",
    label: "ライトブルー",
    light: { r: 0.4, g: 0.6, b: 0.9, a: 1 },
    dark: { r: 0.5, g: 0.7, b: 1, a: 1 },
    japaneseName: undefined
  },
  {
    name: "primary-dark",
    label: "ダークブルー",
    light: { r: 0.1, g: 0.2, b: 0.6, a: 1 },
    dark: { r: 0.3, g: 0.5, b: 0.9, a: 1 },
    japaneseName: undefined
  },

  // アクセントカラー
  {
    name: "accent",
    label: "アクセントオレンジ",
    light: { r: 0.9, g: 0.5, b: 0.2, a: 1 },
    dark: { r: 1, g: 0.6, b: 0.3, a: 1 },
    japaneseName: undefined
  },

  // 背景カラー
  {
    name: "bg-primary",
    label: "背景プライマリー",
    light: { r: 1, g: 1, b: 1, a: 1 },
    dark: { r: 0.1, g: 0.1, b: 0.1, a: 1 },
    japaneseName: undefined
  },
  {
    name: "bg-surface",
    label: "サーフェス背景",
    light: { r: 0.98, g: 0.98, b: 0.98, a: 1 },
    dark: { r: 0.15, g: 0.15, b: 0.15, a: 1 },
    japaneseName: undefined
  },
  {
    name: "bg-elevated",
    label: "浮き上がり背景",
    light: { r: 0.96, g: 0.96, b: 0.96, a: 1 },
    dark: { r: 0.2, g: 0.2, b: 0.2, a: 1 },
    japaneseName: undefined
  },

  // ボーダーカラー
  {
    name: "border-default",
    label: "デフォルトボーダー",
    light: { r: 0.9, g: 0.9, b: 0.9, a: 1 },
    dark: { r: 0.25, g: 0.25, b: 0.25, a: 1 },
    japaneseName: undefined
  },
  {
    name: "border-subtle",
    label: "サブトルボーダー",
    light: { r: 0.93, g: 0.93, b: 0.93, a: 1 },
    dark: { r: 0.18, g: 0.18, b: 0.18, a: 1 },
    japaneseName: undefined
  },

  // テキストカラー
  {
    name: "text-primary",
    label: "プライマリーテキスト",
    light: { r: 0.15, g: 0.15, b: 0.15, a: 1 },
    dark: { r: 0.95, g: 0.95, b: 0.95, a: 1 },
    japaneseName: undefined
  },
  {
    name: "text-secondary",
    label: "セカンダリーテキスト",
    light: { r: 0.45, g: 0.45, b: 0.45, a: 1 },
    dark: { r: 0.7, g: 0.7, b: 0.7, a: 1 },
    japaneseName: undefined
  },
  {
    name: "text-muted",
    label: "ミュートテキスト",
    light: { r: 0.6, g: 0.6, b: 0.6, a: 1 },
    dark: { r: 0.5, g: 0.5, b: 0.5, a: 1 },
    japaneseName: undefined
  },
  {
    name: "text-on-accent",
    label: "アクセント上のテキスト",
    light: { r: 1, g: 1, b: 1, a: 1 },
    dark: { r: 1, g: 1, b: 1, a: 1 },
    japaneseName: undefined
  },

  // セマンティックカラー
  {
    name: "success",
    label: "成功グリーン",
    light: { r: 0.2, g: 0.6, b: 0.3, a: 1 },
    dark: { r: 0.3, g: 0.7, b: 0.4, a: 1 },
    japaneseName: undefined
  },
  {
    name: "warning",
    label: "警告イエロー",
    light: { r: 0.9, g: 0.7, b: 0.2, a: 1 },
    dark: { r: 1, g: 0.8, b: 0.3, a: 1 },
    japaneseName: undefined
  },
  {
    name: "error",
    label: "エラーレッド",
    light: { r: 0.8, g: 0.2, b: 0.2, a: 1 },
    dark: { r: 0.9, g: 0.3, b: 0.3, a: 1 },
    japaneseName: undefined
  }
];
