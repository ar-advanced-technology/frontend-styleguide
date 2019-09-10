---
title: 考え方
meta:
  - name: description
    content: ベースとする思想の説明
---

## OOCSSをベースに

OOCSSとは「オブジェクト指向」の概念を取り入れた設計思想のこと。<br>
ルールは２つ。

* 基本構造と見た目を分ける
* 入れ物と中身を分ける

```html
<button class="button">ボタン</button>
<button clsss="button is-primary">ボタン</button>
<button clsss="button is-small">ボタン</button>
```
```scss
// ボタンの基本構造
.button {
  display: inline-block;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  color: #fff;
  background-color: #000;
  border-radius: 4px;

  // 見た目を変えるスタイル
  &.is-primary {
    background-color: #9FC43A;
  }
  &.is-small {
    font-size: 0.75rem;
  }
}
```

参考： [Bootstrap](https://getbootstrap.com/) 、 [Bulma](https://bulma.io/)
