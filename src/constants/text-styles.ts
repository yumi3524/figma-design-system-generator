/**
 * テキストスタイル定義
 *
 * 使い方:
 * - name: スタイル名（"カテゴリ/スタイル名" 形式）
 * - fontFamily: フォント名（Figmaで利用可能なもの）
 * - fontStyle: "Regular", "Bold", "Medium" など
 * - fontSize: フォントサイズ（px）
 * - lineHeight: 行の高さ（px）
 * - letterSpacing: 字間（px、通常は0）
 */
export interface TextStyleDefinition {
  name: string;
  fontFamily: string;
  fontStyle: string;
  fontSize: number;
  lineHeight: number;
  letterSpacing: number;
}

/** デフォルト: Inter（Figmaで広く利用可能） */
export const TEXT_STYLES: TextStyleDefinition[] = [
  { name: "Heading/H1", fontFamily: "Inter", fontStyle: "Bold", fontSize: 48, lineHeight: 56, letterSpacing: 0 },
  { name: "Heading/H2", fontFamily: "Inter", fontStyle: "Bold", fontSize: 36, lineHeight: 44, letterSpacing: 0 },
  { name: "Heading/H3", fontFamily: "Inter", fontStyle: "Bold", fontSize: 24, lineHeight: 32, letterSpacing: 0 },
  { name: "Body/Base", fontFamily: "Inter", fontStyle: "Regular", fontSize: 16, lineHeight: 24, letterSpacing: 0 },
  { name: "Body/Small", fontFamily: "Inter", fontStyle: "Regular", fontSize: 14, lineHeight: 20, letterSpacing: 0 },
  { name: "Caption", fontFamily: "Inter", fontStyle: "Regular", fontSize: 12, lineHeight: 16, letterSpacing: 0 },
];
