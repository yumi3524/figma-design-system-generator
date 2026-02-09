import { NumberDefinition } from './spacing';

/**
 * タイポグラフィスケール（フォントサイズ）
 *
 * 使い方:
 * - name: Figma変数名（text-xs, text-sm など）
 * - value: フォントサイズ（px）
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
 *
 * 使い方:
 * - name: Figma変数名（radius-sm, radius-md など）
 * - value: 角丸サイズ（px）、fullは9999で完全な円
 */
export const BORDER_RADIUS: NumberDefinition[] = [
  { name: "radius-none", value: 0 },
  { name: "radius-sm", value: 4 },
  { name: "radius-md", value: 8 },
  { name: "radius-lg", value: 16 },
  { name: "radius-xl", value: 24 },
  { name: "radius-full", value: 9999 }
];
