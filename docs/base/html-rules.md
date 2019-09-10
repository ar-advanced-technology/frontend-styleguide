---
title: HTML記述ルール
meta:
  - name: description
    content: HTMLに関するルールの説明
---

## HTMLの技術仕様を守る

### コンテンツモデル
[コンテンツモデル](https://developer.mozilla.org/ja/docs/Web/Guide/HTML/Content_categories)と呼ばれる各タグの入れ子関係のルールを厳守する。

**ルールの一例**
* ```<p>``` の中に ```<div>``` は入らない
* ```<ul>``` の直下には ```<li>``` しか入らない

[参考チートシート](https://webgoto.net/html5/)


### IDはページ内でユニークなものに

同じIDを1ページ内に何度も使用することはできない。


### id、クラス名は数字で始めない

文法的に誤りなので避ける。


## セマンティックなマークアップ

* SEOのため
* アクセシビリティのため
* 保守性・可読性アップのため


## スタイルを記述しない

**これはCSS設計のほうが適切かも？？**

HTMLファイル内にスタイルを記述してしまうと、

* コードの可読性が落ちる
* スタイルの管理場所が分散し、メンテンアンス性が落ちる
* CSSファイルで指定したスタイルの優先度に想定外の影響を与える

等のデメリットがあるため、  

* HTML＝文書構造
* CSS＝スタイリング

と役割を分担する。


```html
<!-- <style>タグを使用しない -->
<html>
  <head>
    ~
  </head>
  <style>
    .button {
      margin: 0 auto;
      width: 200px;
      background: #f00;
    }
  </style>
  <body>
    <button class="button">ボタン</button>
  </body>
</html>
```

```html
<!-- 直書きしない -->
<button style="margin: 0 auto; width: 200px; background: #f00;">ボタン</button>
```