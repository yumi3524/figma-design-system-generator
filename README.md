# Figma Design System Generator

A configurable Figma plugin to automatically generate design system variables and text styles with Light/Dark mode support.

## ✨ Features

- 🎨 **Color Variables**: Automatically create primitive color variables with Light/Dark modes
- 📐 **Spacing System**: 8px-based spacing scale
- 📝 **Typography**: Font size variables
- 🔘 **Border Radius**: Consistent corner radius values
- 🎯 **Semantic Tokens**: Smart variables that reference primitives and adapt to Light/Dark modes
- ✍️ **Text Styles**: Pre-configured text styles with proper typography hierarchy

## 🚀 Quick Start

### 1. Install Dependencies

```bash
cd figma-design-system-generator
npm install
```

### 2. Customize Your Design System

Edit the files in `src/constants/`:

- **`colors.ts`** - Define your color palette
- **`spacing.ts`** - Set spacing values
- **`typography.ts`** - Configure font sizes and border radius
- **`text-styles.ts`** - Define text style hierarchy

### 3. Build

```bash
npm run build
```

### 4. Load in Figma

1. Open Figma Desktop App
2. Go to **Plugins** → **Development** → **Import plugin from manifest**
3. Select `manifest.json` from this directory
4. Run the plugin: **Plugins** → **Development** → **Design System Generator**

## 📝 Customization Guide

### Colors

Edit `src/constants/colors.ts`:

```typescript
export const COLORS: ColorDefinition[] = [
  {
    name: "primary",
    label: "Primary Blue",
    light: { r: 0.2, g: 0.4, b: 0.8, a: 1 },
    dark: { r: 0.4, g: 0.6, b: 1, a: 1 }
  },
  // Add more colors...
];
```

**Note**: RGB values range from `0.0` to `1.0`

### Text Styles

Edit `src/constants/text-styles.ts`:

```typescript
export const TEXT_STYLES: TextStyleDefinition[] = [
  {
    name: "Heading/H1",
    fontFamily: "Inter",  // Change to your font
    fontStyle: "Bold",
    fontSize: 48,
    lineHeight: 56,
    letterSpacing: 0
  },
  // Add more styles...
];
```

### Spacing & Typography

- **Spacing**: Edit `src/constants/spacing.ts`
- **Typography & Border Radius**: Edit `src/constants/typography.ts`

## 🎯 What Gets Created

When you run the plugin, it creates:

| Category | Count | Description |
|----------|-------|-------------|
| **Variables** | 76 | Colors, spacing, typography, border radius |
| **Text Styles** | 6 | Heading/H1-H3, Body/Base, Body/Small, Caption |
| **Modes** | 2 | Light & Dark |

### Collections

1. **Primitives** - Base values for light and dark modes
2. **Tokens** - Semantic tokens that reference primitives

## 🛠️ Development

### Watch Mode

```bash
npm run watch
```

This will automatically rebuild on file changes.

### Project Structure

```
figma-design-system-generator/
├── src/
│   ├── constants/      # ← Edit these files
│   ├── utils/          # Helper functions
│   └── code.ts         # Main logic
├── manifest.json
├── package.json
└── tsconfig.json
```

## 📚 Requirements

- **Figma Desktop App** (Plugin API not available in browser)
- **Node.js** 16.x or higher
- **Fonts**: Make sure fonts specified in `text-styles.ts` are available in your Figma account

## 🤝 Contributing

Feel free to fork this project and customize it for your needs!

## 📄 License

MIT License - feel free to use this in your projects.

## 🙏 Credits

Created by Yumiko Fujiwara
