# React 小さなアプリ

Hello World やタイマーなど、React で小さなアプリを作成

## Vite で新規プロジェクト作成

[Vite](https://ja.vite.dev)

```
npm create vite@latest プロジェクト名

cd プロジェクトディレクトリ
npm install
```

## パスの設定

参照 [Vite + TypeScript でimportの@エイリアスが利かない](https://qiita.com/h3sn/items/3fa15a79718bf2dcfb12)

```
// Before
import { moduleA } from '../../moduleA';
// After
import { moduleA } from '@/src/moduleA';
```

```
npm install -D vite-tsconfig-paths
```

```
// tsconfig.app.json
{
  "compilerOptions": {
...

    /* ↓追加 */
    /* path setting */
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/*"]
    }
  },
...
}
```

```
// vite.config.ts

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths' // 追加

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()], // , tsconfigPaths() を追加
})
```

## ローカルサーバー立ち上げ

```
npm run dev
```

## バージョン管理

### リモートリポジトリ作成

### ローカルリポジトリ設定

リモートリポジトリを作成した後に表示されるページ内の、

…or create a new repository on the command line

以下に表示されているコマンドを順に打つ

```
cd プロジェクトディレクトリ
git init
git add . // もしくは git add 特定のファイル名
git commit -m "first commit"
git branch -M main
git remote add origin 指定のリモートリポジトリの場所
git push -u origin main
```

## Tailwind CSS

### インストール

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p // tailwind.config.js と tailwind.config.jsを作成
```

### 設定

```
// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content:[
    "./src/***.jsx",
    "./src/***.jsx",
],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

```
// ./src/index.css

@tailwind base;
@tailwind components;
@tailwind utilities;
```

### スタイルを検索

検索欄から検索

[Install Tailwind CSS with Create React App](https://tailwindcss.com/docs/guides/create-react-app)

## ルーティング

+ [Feature Overview](https://reactrouter.com/6.28.0/start/overview#feature-overview)
+ [React Routerのルーティング実装](https://zenn.dev/takaya39/articles/4669c3fd1c7f04)

ライブラリを導入

```
npm install react-router-dom
```

/src/pages 直下に、ページファイルを格納

/src/AppRoutes.tsx にルーティング設定を記述

```

```

## main.tsx

エントリポイントとなるファイル

ここで App コンポーネントをインポートしており、トップページとして App.tsx の内容が表示される