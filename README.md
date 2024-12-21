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

# バージョン管理

## リモートリポジトリ作成

## ローカルリポジトリ設定

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