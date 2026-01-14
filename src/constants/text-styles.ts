/**
 * Text Style Definitions
 * 
 * Customize font families, sizes, and line heights for your design system.
 * Make sure the specified fonts are available in your Figma account.
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
 * Text Styles
 * 
 * Default font: Inter (widely available on Figma)
 * Change to your preferred typeface
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
