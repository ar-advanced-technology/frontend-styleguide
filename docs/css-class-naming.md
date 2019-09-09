---
title: 考え方
meta:
  - name: description
    content: ベースとする思想の説明
---

## OOCSSの思想をベースに

OOCSSとは「オブジェクト指向」の概念を取り入れた設計思想のことです。<br>
以下の2つのルール

* 基本構造と見た目を分ける
* 入れ物と中身を分ける
* マルチクラス

```html
<button class="button">ボタン</button>
<button clsss="button is-primary">ボタン</button>
<button clsss="button is-small">ボタン</button>
```
```scss
.button {
  display: inline-block;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  color: #fff;
  background-color: #000;
  border-radius: 4px;

  &.is-primary {
    background-color: #9FC43A;
  }

  &.is-small {
    font-size: 0.75rem;
  }
}
```

参考： [Bootstrap](https://getbootstrap.com/) 、 [Bulma](https://bulma.io/)

## 


## クラス名はコンテンツ内容に依存しすぎない
依存しすぎると再利用性が低下する。


## クラス名に用いる単語例
