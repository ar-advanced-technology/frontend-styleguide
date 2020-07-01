# クラス命名ルール

## サブコンポーネント

コンポーネントをさらに細かい構成要素に分割します。それらをサブコンポーネントと呼びます。

```html
<article class="card">
  <figure class="card-image">
    <img src="..." alt="">
  </figure>
  <header class="card-header">
    <h2 class="card-title">三位一体開発</h2>
  </header>
  <div class="card-body">
    <p class="card-description">
      プロデューサー、デザイナー、エンジニアの三位一体開発により、 
      ワンストップで事業部門のニーズへの迅速な対応とコスト削減を実現します。
    </p>
  </div>
</article>
```

上記の例の場合、`.card-image` `.card-header` `.card-title` などがそれにあたります。命名ルールとして、`コンポーネント名-サブコンポーネント名` というハイフン区切り形式で記述します。

原則として、クラス名は「親-子」の**2階層まで**とします。たとえば、以下は好ましくない例です。

```html{4}
<!-- NG -->
<article class="card">
  <header class="card-header">
    <h2 class="card-header-title">三位一体開発</h2>
  </header>
</article>
```

`.card-header-title` というクラス名は、「サブコンポーネントのサブコンポーネント」のような形式になっています。

```
.card（親） > .card-header（子） > .card-header-title（孫）
```

HTML の構造としては `<h2>` 要素が `<header>` 要素の下に位置していますが、CSS の命名は **HTML 構造を厳密に反映させる必要はありません**。

HTML 構造と CSS クラス名が密接に結合してしまうと、変更の影響範囲が広くなりやすいため、CSS の世界ではコンポーネントの下にフラットにサブコンポーネントが並ぶ構成とします。

## 修飾クラス

### バリエーションを持つコンポーネント

コンポーネントには、いくつかのバリエーションが存在することがあります。たとえば、基本的には同じボタンだが色だけが異なる、またはサイズだけが異なる、などの場合です。

![Buttons](../assets/buttons.png)

そのような場合、別々のクラスを付与する、つまり別々のコンポーネントとして見なすのではなく、お案じコンポーネントのバージョン違いと捉えます。

具体的には、コンポーネントのクラスには基本のスタイルを定義し、色や大きさなどのバリエーションを増やしたい場合は専用のクラスを用意してスタイルを定義します。

```html
<button class="button is-small">ボタン</button>
<button class="button is-outline">ボタン</button>
<button class="button is-small is-outline">ボタン</button>
```

```scss
.button {
  // ベースとなる色や余白、角丸などを記述

  &.is-outline {
    // 背景色や文字色などの上書きスタイルを記述
  }

  &.is-small {
    // 文字の大きさなどの上書きスタイルを記述
  }
}
```

上記の例のように、修飾クラス名には `is-` プレフィックスを付与して区別します。

また、**一つの修飾クラスには一つの役割だけ**を持たせます。役割とは「サイズが大きい」「小さい」「色が反転している」などです。「一つの役割」とは一つのプロパティ＋値という意味ではありません。複数のプロパティと値の組から成るとしても、意味的に一つの役割であるべきです。

それぞれ単一の役割を持ったさまざまなクラスを用意することで、将来の変更に際し、コンポーネントのカスタマイズ（バリエーション付け）が行いやすくなるでしょう。

役割を意味的にうまく抽象化できるかが、設計の際のポイントの一つです。

### 何を修飾するべきか？

サブコンポーネントを持つコンポーネントの場合、修飾クラスをどこに付与すべきかを考える必要があります。

大抵の場合、修飾クラスはコンポーネントクラスだけに付与します。

```html{1}
<div class="modal is-open">
  <div class="modal-overlay">
    <div class="modal-container">
      <header class="modal-header">...</header>
      <div class="modal-body">...</div>
      <footer class="modal-footer">...</footer>
    </div>
  </div>
</div>
```

修飾される箇所がサブコンポーネントであっても、大元のコンポーネントに付与します。言い換えると、スタイルが変わる箇所に修飾クラスを付与するわけではありません。以下は好ましくない例です。

```html{3,6}
<!-- プレミアムユーザーは写真に印がついて、ユーザー名の文字色が変わるとする -->
<div class="avatar">
  <figure class="avatar-image is-premium">
    <img src="..." alt="..." />
  </figure>
  <div class="avatar-username is-premium">...</div>
  <p class="avatar-description">...</p>
</div>
```

修飾クラスは、コンポーネントそのものに一つだけ付与すれば OK です。

```html{1}
<div class="avatar is-premium">
  <figure class="avatar-image">
    <img src="..." alt="..." />
  </figure>
  <div class="avatar-username">...</div>
  <p class="avatar-description">...</p>
</div>
```

Scss は以下のようになります。

```scss
.avatar {
  .avatar-image {/* 基本スタイル */}
  .avatar-username {/* 基本スタイル */}
  .avatar-description {/* 基本スタイル */}

  &.is-premium {
    .avatar-image {/* 上書きスタイル */}
    .avatar-username {/* 上書きスタイル */}
    .avatar-description {/* 上書きスタイル */}
  }
}
```

ただし、テーブルやリストのような、同種の部品のコレクションを表現するコンポーネントでは、サブコンポーネントに付与すべきパターンもあります。

```html{3}
<nav class="menu">
  <a href="..." class="menu-link">...</a>
  <a href="..." class="menu-link is-active"><!-- 現在表示中のリンク --></a>
  <a href="..." class="menu-link">...</a>
  <a href="..." class="menu-link">...</a>
  <a href="..." class="menu-link">...</a>
</nav>
```

```html{4}
<table class="table">
  <thead>...</thead>
  <tbody>
    <tr class="is-highlighted"><!-- この行のみ強調表示したい --></tr>
    <tr>...</tr>
    <tr>...</tr>
  </tbody>
</table>
```

上記のように「たくさんあるうちの、これだけ」というパターンでは、サブコンポーネントに修飾クラスを付与せざるを得ません。

## レイアウト

ヘッダーやフッター、サイドメニューなどの各ページ共通のレイアウトには、クラス名に `layout-` プレフィックスを付与します。

```html
<body>
  <header class="layout-header">
    サイト共通のヘッダー
  </header>

  <div class="layout-wrapper">
    <main class="layout-main">
      メインコンテンツ
    </main>

    <aside class="layout-sidebar">
      サイドメニュー・補足情報
    </aside>
  </div>

  <footer class="layout-footer">
    サイト共通のフッター
  </footer>
</body>
```

共通レイアウトの基準は、

* ページ内のレイアウトの大枠を決めるブロックであるかどうか
* ページ単位で唯一の存在である要素かどうか

の2点です。

## JavaScript

JavaScript での DOM 操作の対象となる要素には、専用のクラス名を付与します。操作用のクラスには `js-` プレフィックスを付与します[^1]。

[^1]: React などのライブラリを用いる場合はほとんど必要のない制約でしょう。

```html
<button class="button js-modal-trigger">ボタン</button>
```

```js
document.querySelector('.js-modal-trigger').addEventListener('click', () => {
  console.log('モーダルを開きます');
});
```

ここでの意図は、視覚的な装飾を担うクラスと DOM 操作の対象となるクラスを区別することです。両者を区別しないと、たとえば視覚的な要請からあるクラスを削除すると JS が動かなくなる、といったように、変更による影響範囲は広く、予測しづらくなります。そのため、基本的にこのクラスでのスタイルの定義は行いません。
