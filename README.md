# Figma Design System Generator

設定可能なFigmaプラグイン - デザインシステムの変数とテキストスタイルをLight/Darkモード対応で自動生成

---

## ■ 概要

TypeScript定数ファイルからFigmaのデザインシステムを自動生成するプラグインです。カラー、スペーシング、タイポグラフィ、テキストスタイルをLight/Darkモード対応で一括作成し、視覚的なドキュメンテーションフレームも生成します。

---

## ■ 主な機能

### ⚫︎ カラーシステム
- プリミティブカラー変数（Light/Dark別の基本カラー）
- セマンティックトークン（モードに応じて自動切り替え）

### ⚫︎ スペーシングシステム
- 8pxベースのスペーシングスケール（xs〜6xl）

### ⚫︎ タイポグラフィシステム
- フォントサイズ変数（xs〜6xl）
- 角丸変数（sm、md、lg、full）

### ⚫︎ テキストスタイル
- 見出し階層（H1〜H3）、本文スタイル（Base、Small）、キャプション

### ⚫︎ ドキュメンテーション
- カラー、スペーシング、タイポグラフィの視覚的サンプルフレームを自動生成

---

## ■ クイックスタート

### ▼ 1. セットアップ

```bash
git clone <repository-url>
cd figma-design-system-generator
npm install
```

### ▼ 2. カスタマイズ（任意）

デザインシステムをカスタマイズする場合、`src/constants/` 内のファイルを編集してください。詳細は「カスタマイズガイド」セクションを参照。

### ▼ 3. ビルドと実行

```bash
# ビルド
npm run build

# または開発中はwatchモード
npm run watch
```

### ▼ 4. Figmaで読み込み

1. Figma デスクトップアプリを開く
2. **Plugins** → **Development** → **Import plugin from manifest**
3. `manifest.json` を選択
4. **Plugins** → **Development** → **Design System Generator** を実行

---

## ■ カスタマイズガイド

### ▼ 編集対象ファイル

| ファイル | 内容 |
|---------|------|
| `src/constants/colors.ts` | カラーパレット（プリミティブとセマンティック） |
| `src/constants/spacing.ts` | スペーシング値 |
| `src/constants/typography.ts` | フォントサイズと角丸 |
| `src/constants/text-styles.ts` | テキストスタイル階層 |

### ▼ カラーの追加・変更

`src/constants/colors.ts`:

```typescript
export const COLORS: ColorDefinition[] = [
  {
    name: "primary",              // 変数名
    japaneseName: "プライマリー",  // 日本語名（ログ用）
    light: { r: 0.2, g: 0.4, b: 0.8, a: 1 },  // Lightモード
    dark: { r: 0.4, g: 0.6, b: 1, a: 1 }      // Darkモード
  },
];
```

**注意**: RGB値は `0.0`〜`1.0` の範囲で指定。

### ▼ スペーシングの追加・変更

`src/constants/spacing.ts`:

```typescript
export const SPACING: SpacingDefinition[] = [
  { name: "xs", value: 4 },
  { name: "sm", value: 8 },
];
```

### ▼ テキストスタイルの追加・変更

`src/constants/text-styles.ts`:

```typescript
export const TEXT_STYLES: TextStyleDefinition[] = [
  {
    name: "Heading/H1",
    fontFamily: "Inter",
    fontStyle: "Bold",
    fontSize: 48,
    lineHeight: 56,
    letterSpacing: 0
  },
];
```

### ▼ タイポグラフィと角丸の変更

`src/constants/typography.ts`:

```typescript
export const TYPOGRAPHY: TypographyDefinition[] = [
  { name: "xs", value: 12 },
];

export const BORDER_RADIUS: BorderRadiusDefinition[] = [
  { name: "sm", value: 4 },
];
```

---

## ■ 生成されるアセット

### ▼ 変数コレクション

| コレクション | 内容 |
|------------|------|
| **Primitives** | プリミティブカラー（Light/Dark別）、スペーシング、タイポグラフィ、角丸 |
| **Tokens** | セマンティックカラートークン（Light/Darkモード対応） |

### ▼ 変数の内訳

- カラー変数: プリミティブ（Light/Dark別）+ セマンティックトークン
- スペーシング変数: 8個（xs〜6xl）
- タイポグラフィ変数: 8個（xs〜6xl）
- 角丸変数: 4個（sm、md、lg、full）

### ▼ テキストスタイル

Heading/H1〜H3、Body/Base、Body/Small、Caption

### ▼ モード

**Light** / **Dark**

### ▼ ドキュメンテーションフレーム

カラーパレット、スペーシングスケール、タイポグラフィサンプルを含む視覚的なドキュメンテーションフレームが現在のページに自動生成されます。

---

## ■ プロジェクト構造

```
figma-design-system-generator/
├── src/
│   ├── constants/          ← カスタマイズ対象
│   │   ├── colors.ts
│   │   ├── spacing.ts
│   │   ├── typography.ts
│   │   └── text-styles.ts
│   ├── generators/
│   │   └── frame-generator.ts
│   ├── utils/
│   │   └── helpers.ts
│   └── code.ts
├── code.js
├── manifest.json
└── package.json
```

---

## ■ 開発

### ▼ Watchモード

```bash
npm run watch
```

ファイル変更時に自動再ビルド。Figmaでプラグインを再実行するだけで変更反映。

### ▼ 通常ビルド

```bash
npm run build
```

---

## ■ 動作要件

- Figma デスクトップアプリ（ブラウザ版ではPlugin API利用不可）
- Node.js 16.x 以上
- テキストスタイルで指定したフォントがFigmaアカウントで利用可能であること

---

## ■ トラブルシューティング

### ▼ フォントが読み込めない

```
Warning: Could not load font for...
```

**解決方法**:
- Figmaアカウントで該当フォントが利用可能か確認
- `text-styles.ts` のフォント名を修正

### ▼ 変数が重複している

既存の同名変数がある場合、プラグインは既存変数を使用します。完全に再作成する場合は、変数コレクションを削除してから実行してください。

---

## ■ ライセンス

MIT License

---

## ■ クレジット

Created by Yumiko Fujiwara
