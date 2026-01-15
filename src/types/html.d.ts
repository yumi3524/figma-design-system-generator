/**
 * Figma Plugin UI HTML型定義
 * esbuildによってコンパイル時にHTMLファイルが文字列としてインポートされる
 */

declare module '*.html' {
  const content: string;
  export default content;
}
