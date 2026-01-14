/**
 * タイポグラフィ定義 - フォントサイズスケール
 * デザインシステムのタイポグラフィをカスタマイズ
 */

import { NumberDefinition } from './spacing';

/**
 * タイポグラフィスケール
 */
export const TYPOGRAPHY: NumberDefinition[] = [
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

/**
 * 角丸スケール
 */
export const BORDER_RADIUS: NumberDefinition[] = [
  { name: "radius-none", value: 0 },
  { name: "radius-sm", value: 4 },
  { name: "radius-md", value: 8 },
  { name: "radius-lg", value: 16 },
  { name: "radius-xl", value: 24 },
  { name: "radius-full", value: 9999 }
];
