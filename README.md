# 概要

[Next.js App Router で実装！フリマっぽいサンプルアプリ](https://zenn.dev/t_hayashi/articles/e7917167b68a6b) という記事のリポジトリです。

# 利用手順

## 0. 想定している動作環境

Mac のローカルで動かすことを想定したリポジトリとなっています。
node と npm がインストールされている前提でお読みください。

簡易的なバックエンドとして下記のリポジトリを利用します。

https://github.com/hayashit6239/nextjs-app-sample-json

カレントディレクトリは `nextjs-app-sample-json` のルートディレクトリです。

```terminal
npm install
npm start
```

ポート 8000 番で動作します。

## 1. ビルド

環境に合わせて [yarn をインストール](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)します。

インストール完了後、カレントディレクトリを `nextjs-app-sample` のルートディレクトリに移動します。

```terminal
cp ./.env.dummy ./.env.development
yarn install
yarn build
```

下記の出力がでれば成功です。

```
...
Route (app)                              Size     First Load JS
┌ ○ /                                    156 B           108 kB
├ ○ /_not-found                          983 B           109 kB
├ ƒ /api/products/[id]                   156 B           108 kB
├ ƒ /api/products/lazy                   156 B           108 kB
├ ƒ /api/products/quick                  156 B           108 kB
├ ƒ /api/set-cookie                      156 B           108 kB
├ ƒ /api/signout                         156 B           108 kB
├ ƒ /api/users/[id]                      156 B           108 kB
├ ○ /home                                151 B           264 kB
├ ◐ /products/[id]                       151 B           264 kB
├   └ /products/[id]
├ ○ /search                              2.74 kB         265 kB
├ ○ /sell                                3.58 kB         186 kB
├ ○ /signin                              1.64 kB         145 kB
└ ◐ /users/[id]                          1.56 kB         264 kB
    └ /users/[id]
...
```

一部の環境ではビルドが失敗する可能性があります。その場合は、スキップして次の実行にお進みください。

## 2. 実行

同様にカレントディレクトリは `nextjs-app-sample` のルートディレクトリです。

```terminal
yarn dev
```

## 3. ログイン

商品一覧（/home）やユーザー詳細（/users/[id]）などはログインなしでも閲覧可能です。

出品するためには下記の情報でログイン後に可能です。

- ユーザー名: user
- パスワード：password
