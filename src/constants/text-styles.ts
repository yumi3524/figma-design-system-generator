/**
 * テキストスタイル定義
 * 
 * デザインシステムに合わせてフォントファミリー、サイズ、行間をカスタマイズ。
 * 指定したフォントがFigmaアカウントで利用可能であることを確認してください。
 */

export interface TextStyleDefinition {
  name: string;
  fontFamily: string;
  fontStyle: string;
  fontSize: number;
  lineHeight: number;
  letterSpacing: number;
}

/**
 * テキストスタイル
 * 
 * デフォルトフォント: Inter（Figmaで広く利用可能）
 * お好みのフォントに変更してください
 */
export const TEXT_STYLES: TextStyleDefinition[] = [
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
