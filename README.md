# Figma Design System Generator

設定可能なFigmaプラグイン - デザインシステムの変数とテキストスタイルをLight/Darkモード対応で自動生成

## ✨ 機能

- 🎨 **カラー変数**: Light/Darkモード対応のプリミティブカラー変数を自動作成
- 📐 **スペーシングシステム**: 8pxベースのスペーシングスケール
- 📝 **タイポグラフィ**: フォントサイズ変数
- 🔘 **角丸**: 一貫した角丸の値
- 🎯 **セマンティックトークン**: プリミティブを参照し、Light/Darkモードに自動適応するスマート変数
- ✍️ **テキストスタイル**: タイポグラフィ階層が設定済みのテキストスタイル

## 🚀 クイックスタート

### 1. 依存関係のインストール

```bash
cd figma-design-system-generator
npm install
```

### 2. デザインシステムをカスタマイズ

`src/constants/` 内のファイルを編集：

- **`colors.ts`** - カラーパレットを定義
- **`spacing.ts`** - スペーシング値を設定
- **`typography.ts`** - フォントサイズと角丸を設定
- **`text-styles.ts`** - テキストスタイルの階層を定義

### 3. ビルド

```bash
npm run build
```

### 4. Figmaで読み込み

1. Figma デスクトップアプリを開く
2. **Plugins** → **Development** → **Import plugin from manifest**
3. このディレクトリの `manifest.json` を選択
4. プラグインを実行: **Plugins** → **Development** → **Design System Generator**

## 📝 カスタマイズガイド

### カラー

`src/constants/colors.ts` を編集：

```typescript
export const COLORS: ColorDefinition[] = [
  {
    name: "primary",
    label: "プライマリーブルー",
    light: { r: 0.2, g: 0.4, b: 0.8, a: 1 },
    dark: { r: 0.4, g: 0.6, b: 1, a: 1 }
  },
  // さらに追加...
];
```

**注意**: RGB値は `0.0` から `1.0` の範囲です

### テキストスタイル

`src/constants/text-styles.ts` を編集：

```typescript
export const TEXT_STYLES: TextStyleDefinition[] = [
  {
    name: "Heading/H1",
    fontFamily: "Inter",  // お好みのフォントに変更
    fontStyle: "Bold",
    fontSize: 48,
    lineHeight: 56,
    letterSpacing: 0
  },
  // さらに追加...
];
```

### スペーシング & タイポグラフィ

- **スペーシング**: `src/constants/spacing.ts` を編集
- **タイポグラフィ & 角丸**: `src/constants/typography.ts` を編集

## 🎯 生成されるアセット

プラグインを実行すると、以下が作成されます：

| カテゴリ | 数量 | 説明 |
|----------|-------|-------------|
| **Variables** | 76個 | カラー、スペーシング、タイポグラフィ、角丸 |
| **Text Styles** | 6個 | Heading/H1-H3, Body/Base, Body/Small, Caption |
| **Modes** | 2個 | Light & Dark |

### コレクション

1. **Primitives** - Light/Darkモードの基本値
2. **Tokens** - Primitivesを参照するセマンティックトークン

## 🛠️ 開発

### Watchモード

```bash
npm run watch
```

ファイル変更時に自動的に再ビルドされます。

### プロジェクト構造

```
figma-design-system-generator/
├── src/
│   ├── constants/      # ← これらのファイルを編集
│   ├── utils/          # ヘルパー関数
│   └── code.ts         # メインロジック
├── manifest.json
├── package.json
└── tsconfig.json
```

## 📚 必要要件

- **Figma デスクトップアプリ**（ブラウザ版ではPlugin APIが利用できません）
- **Node.js** 16.x 以上
- **フォント**: `text-styles.ts` で指定したフォントがFigmaアカウントで利用可能である必要があります

## 🤝 貢献

このプロジェクトを自由にフォークしてカスタマイズしてください！

## 📄 ライセンス

MIT License - プロジェクトで自由に利用できます

## 🙏 クレジット

Created by Yumiko Fujiwara
