/// <reference types="@figma/plugin-typings" />

/**
 * Color Definitions - Generic Color Palette
 * 
 * Customize this file for your design system.
 * Each color requires both light and dark mode values.
 */

export interface ColorDefinition {
  name: string;
  label: string;  // Human-readable label
  light: { r: number; g: number; b: number; a: number };
  dark: { r: number; g: number; b: number; a: number };
}

/**
 * Color Palette
 * 
 * Edit these values to match your brand colors.
 * RGB values range from 0.0 to 1.0
 */
export const COLORS: ColorDefinition[] = [
  // Primary Colors
  {
    name: "primary",
    label: "Primary Blue",
    light: { r: 0.2, g: 0.4, b: 0.8, a: 1 },
    dark: { r: 0.4, g: 0.6, b: 1, a: 1 }
  },
  {
    name: "primary-light",
    label: "Light Blue",
    light: { r: 0.4, g: 0.6, b: 0.9, a: 1 },
    dark: { r: 0.5, g: 0.7, b: 1, a: 1 }
  },
  {
    name: "primary-dark",
    label: "Dark Blue",
    light: { r: 0.1, g: 0.2, b: 0.6, a: 1 },
    dark: { r: 0.3, g: 0.5, b: 0.9, a: 1 }
  },

  // Accent Colors
  {
    name: "accent",
    label: "Accent Orange",
    light: { r: 0.9, g: 0.5, b: 0.2, a: 1 },
    dark: { r: 1, g: 0.6, b: 0.3, a: 1 }
  },

  // Background Colors
  {
    name: "bg-primary",
    label: "Background Primary",
    light: { r: 1, g: 1, b: 1, a: 1 },
    dark: { r: 0.1, g: 0.1, b: 0.1, a: 1 }
  },
  {
    name: "bg-surface",
    label: "Surface Background",
    light: { r: 0.98, g: 0.98, b: 0.98, a: 1 },
    dark: { r: 0.15, g: 0.15, b: 0.15, a: 1 }
  },
  {
    name: "bg-elevated",
    label: "Elevated Background",
    light: { r: 0.96, g: 0.96, b: 0.96, a: 1 },
    dark: { r: 0.2, g: 0.2, b: 0.2, a: 1 }
  },

  // Border Colors
  {
    name: "border-default",
    label: "Default Border",
    light: { r: 0.9, g: 0.9, b: 0.9, a: 1 },
    dark: { r: 0.25, g: 0.25, b: 0.25, a: 1 }
  },
  {
    name: "border-subtle",
    label: "Subtle Border",
    light: { r: 0.93, g: 0.93, b: 0.93, a: 1 },
    dark: { r: 0.18, g: 0.18, b: 0.18, a: 1 }
  },

  // Text Colors
  {
    name: "text-primary",
    label: "Primary Text",
    light: { r: 0.15, g: 0.15, b: 0.15, a: 1 },
    dark: { r: 0.95, g: 0.95, b: 0.95, a: 1 }
  },
  {
    name: "text-secondary",
    label: "Secondary Text",
    light: { r: 0.45, g: 0.45, b: 0.45, a: 1 },
    dark: { r: 0.7, g: 0.7, b: 0.7, a: 1 }
  },
  {
    name: "text-muted",
    label: "Muted Text",
    light: { r: 0.6, g: 0.6, b: 0.6, a: 1 },
    dark: { r: 0.5, g: 0.5, b: 0.5, a: 1 }
  },
  {
    name: "text-on-accent",
    label: "Text on Accent",
    light: { r: 1, g: 1, b: 1, a: 1 },
    dark: { r: 1, g: 1, b: 1, a: 1 }
  },

  // Semantic Colors
  {
    name: "success",
    label: "Success Green",
    light: { r: 0.2, g: 0.6, b: 0.3, a: 1 },
    dark: { r: 0.3, g: 0.7, b: 0.4, a: 1 }
  },
  {
    name: "warning",
    label: "Warning Yellow",
    light: { r: 0.9, g: 0.7, b: 0.2, a: 1 },
    dark: { r: 1, g: 0.8, b: 0.3, a: 1 }
  },
  {
    name: "error",
    label: "Error Red",
    light: { r: 0.8, g: 0.2, b: 0.2, a: 1 },
    dark: { r: 0.9, g: 0.3, b: 0.3, a: 1 }
  }
];
