---
title: 共通ルール
meta:
  - name: description
    content: インデントやスペース等のHTML/CSS共通ルールの説明
---

## エンコーディング

UTF-8。


## インデント

スペース2つとする。


## コメント
残タスク等をコメントにて記載する場合は「TODO:」というプレフィックスを付与する。  
VScodeの場合「[Todo Tree](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree)」というプラグインを使用することで、TODOをまとめて確認することができる。

```html
<!-- TODO: 色の展開 -->
<button class="button">ボタン</button>
```
```scss
// TODO: 各バリエーション用のスタイルの作成
.button {
  display: inline-block;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  color: #fff;
  background-color: #000;
  border-radius: 4px;
}
```