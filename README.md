# 社会保険労務士事務所 ウェブサイト

社会保険労務士事務所のプロフェッショナルなウェブサイトです。React + TypeScript + Tailwind CSSで構築されたモダンなSPAサイトです。

## 🌟 特徴

- **レスポンシブデザイン**: スマートフォン・タブレット・デスクトップに完全対応
- **フルページセクション**: 各セクションが画面全体を使用し、スクロール時に最適な表示
- **スムーススクロール**: ナビゲーションによる滑らかなページ内スクロール
- **法的ページ**: 利用規約・プライバシーポリシー・特定商取引法に基づく表記を完備
- **静的サイト対応**: HashRouterによる静的ホスティング対応

## 🛠 技術スタック

- **Frontend**: React 19.1.1 + TypeScript
- **Build Tool**: Vite 6.2.0
- **Styling**: Tailwind CSS (CDN版)
- **Routing**: React Router DOM (HashRouter)
- **Font**: Noto Sans JP

## 📋 ページ構成

### メインページ (`/`)
- **ヒーローセクション**: メインコピー「ちょっとした疑問も、あなたのそばでサポートします。」
- **事務所紹介**: 代表者挨拶・事務所概要
- **業務内容**: 4つの主要サービス（社会保険手続き・就業規則・助成金・労務相談）
- **料金**: 顧問契約・就業規則作成・助成金申請の料金目安
- **お問い合わせ**: 電話・メール情報とフォーム

### 法的ページ
- **利用規約** (`/tos`): サイト利用規約
- **プライバシーポリシー** (`/privacy`): 個人情報保護方針
- **特定商取引法に基づく表記** (`/sct`): 法的表記

## 🚀 開発・運用

### 必要環境
- Node.js (推奨: 18.x以上)
- npm

### ローカル開発

1. **依存関係をインストール**:
   ```bash
   npm install
   ```

2. **開発サーバー起動**:
   ```bash
   npm run dev
   ```

3. **ブラウザでアクセス**:
   ```
   http://localhost:3000
   ```

### プロダクションビルド

```bash
# ビルド実行
npm run build

# ビルド結果プレビュー
npm run preview
```

### デプロイ

静的サイトホスティングサービスに対応:
- **Vercel** (推奨)
- **Netlify**
- **GitHub Pages**
- **AWS S3 + CloudFront**

## 📁 プロジェクト構造

```
sharoushi/
├── components/          # Reactコンポーネント
│   ├── Header.tsx      # ヘッダー・ナビゲーション
│   ├── Hero.tsx        # メインビジュアル
│   ├── About.tsx       # 事務所紹介
│   ├── Services.tsx    # 業務内容
│   ├── Pricing.tsx     # 料金
│   ├── Contact.tsx     # お問い合わせ
│   ├── Footer.tsx      # フッター
│   └── ScrollToTop.tsx # ページトップスクロール
├── pages/              # ページコンポーネント
│   ├── Home.tsx        # メインページ
│   ├── TermsOfService.tsx
│   ├── PrivacyPolicy.tsx
│   └── SpecifiedCommercialTransactions.tsx
├── App.tsx             # メインアプリケーション
├── index.tsx           # エントリーポイント
├── index.html          # HTML テンプレート
├── vite.config.ts      # Vite設定
├── tsconfig.json       # TypeScript設定
└── CLAUDE.md           # 開発ガイドライン
```

## 🎨 カスタマイズ

### カラーテーマ
`index.html` のTailwind設定で定義:
- **Primary**: `#0284c7` (ブルー)
- **Primary Dark**: `#0369a1` (ダークブルー)
- **Secondary**: `#f0f9ff` (ライトブルー)
- **Accent**: `#fbbf24` (イエロー)

### 事務所情報の変更
以下のファイルでプレースホルダー値を実際の情報に置き換え:
- `components/About.tsx` - 事務所概要
- `components/Contact.tsx` - 連絡先情報
- `components/Footer.tsx` - フッター情報

## 📞 サポート

このプロジェクトに関するご質問は、開発チームまでお問い合わせください。

---

© 2024 社会保険労務士事務所. All rights reserved.
