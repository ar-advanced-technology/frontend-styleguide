---
title: 考え方
meta:
  - name: description
    content: ベースとする思想の説明
---

# 考え方

## 構造用のクラスと見た目用のクラスを分ける

```html
<button class="button">ボタン</button>
<button clsss="button is-primary">ボタン</button>
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

  // 見た目を変えるためのスタイル
  &.is-primary {
    background-color: #f00;
  }
}
```

## 入れ物と中身は依存させない

入れ物はどんな中身が入ってきても、中身はどんな入れ物に入ってもレイアウトが崩れないように指定する。

```html
<header class="page-header">
  <h1 class="site-title">
    Site Title
  </h1>
  <ul class="global-nav">
    <li class="global-nav-item">Home</li>
    <li class="global-nav-item">About</li>
    <li class="global-nav-item">Member</li>
  </ul>
</header>
```
```scss
/* OK */
.page-header {
  
}
.site-title {

}
.global-nav {

}

/* NG */
.page-header {
  .site-title {

  }
  .global-nav {

  }
}
```

## ページ単位ではなくコンポーネント単位

* コンポーネント（パーツ）単位でCSSファイルを分ける
  * ページごとだと量が膨大になる
  * 再利用しやすい
  * 管理しやすい

コンポーネントとして扱われるパーツ例：
* ボタン
* タイトル
* テーブル
* 入力フィールド
* ページャ etc...

```html
<!-- カードコンポーネント -->
<div class="card">
  <div class="card-image">
    <img src="/image/sample.jpg" alt="画像タイトル">
  </div>
  <div class="card-body">
    <h2 class="card-title">
      カードタイトル
    </h2>
    <p class="card-text">
      説明テキストが入ります。
    </p>
  </div>
</div>
```
```scss
.card {
}
.card-body {
}
.card-title {
}
.card-text {
}
```

上記の場合、
* ```.card``` = コンポーネント
* ```.card-body``` = サブコンポーネント


## スタイルはクラスで指定

* HTMLが変わってもCSSへの影響を最小限に抑えられるため
* ただし、```<input>```フォーム系のタグや```<a>```など、用途が限られているもの（他のタグに置き換える機会があまりないもの）はクラスではなくセレクタに指定する場合もある
* idはページ内でユニークである必要があり、再利用できないためスタイルの指定には使用しない

