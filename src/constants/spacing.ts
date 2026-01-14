/**
 * スペーシング定義 - 8pxベーススケール
 * デザインシステムのスペーシング値をカスタマイズ
 */

export interface NumberDefinition {
  name: string;
  value: number;
}

/**
 * スペーシングスケール
 * 8pxを基準としたスケール
 */
export const SPACING: NumberDefinition[] = [
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
