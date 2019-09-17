---
title: ディレクトリ構成
meta:
  - name: description
    content: Scssファイル関連のルールの説明
---

# ディレクトリ構成


```/sass``` ディレクトリ内の構成は以下を基準とします。

```
sass/
|
|— core/
|     |— _variables.scss
|     |— _mixins.scss
|     |— _functions.scss
|     `— _reboot
|
|— utils/
|     |— _background.scss
|     |— _spacer.scss
|     |— _typography.scss
|     `— _responsive.scss
|
|— components/
|     |— _button.scss
|     |— _card.scss
|     |— _table.scss
|     `—  etc...
|
|— layouts/
|     |— _header.scss
|     |— _footer.scss
|     `—  etc...
|
|  # import用
|— _core.scss
|— _utils.scss
|— _components.scss
|— _layouts.scss
|
`— app.scss
```

### core
変数やミックスイン、リセット用スタイルなど全てのベースとなる情報、スタイルをまとめたフォルダ

### utils
マージンや背景色、文字などの汎用性の高いスタイル用のフォルダ

### components
各コンポーネント用のフォルダ

### layout
共通レイアウト用（ ```layout-``` プレフィックスがついたもの）のフォルダ。

### import用ファイル
各ディレクトリと同じ名称のscssファイルを ```/sass``` の直下に作成し、それぞれでインポート→ ```app.scss``` でマージする