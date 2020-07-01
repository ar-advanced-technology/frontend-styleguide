# クラス設計例

:::warning
このページは全体的にTODOです。説明を追加する必要あり。
:::

## レイアウト

### 1カラム

```html
<!-- TODO -->
```

### 2カラム

```html
<!-- TODO -->
```

## コンポーネント

### ボタン

```html
<button class="button">ボタン</button>
```

```html
<button class="button is-primary">ボタン</button>
<button class="button is-secondary">ボタン</button>
```

```html
<button class="button is-primary is-outline">ボタン</button>
```

```html
<button class="button is-primary is-small">ボタン</button>
<button class="button is-primary is-large">ボタン</button>
```

```html
<button class="button is-primary is-fullwidth">ボタン</button>
<button class="button is-primary is-fluid">ボタン</button>
<button class="button is-primary is-block">ボタン</button>
```

```html
<button class="button is-primary is-fullwidth">
  <i class="button-icon fa fa-cat"></i>
  ボタン
</button>
```

### カード

```html
<div class="card">
  <header class="card-header">
    <h2 class="card-title">...</h2>
  </header>
  <figure class="card-image">
    <img src="" alt="" />
  </figure>
  <div class="card-body">
    <p class="card-text">...</p>
  </div>
  <footer class="card-footer">...</footer>
</div>
```

モーダルウィンドウも同様。

### リスト

```html
<ul class="card-list">
  <li class="card-list-item">
    <div class="card">...</div>
  </li>
  <li class="card-list-item">
    <div class="card">...</div>
  </li>
  <li class="card-list-item">
    <div class="card">...</div>
  </li>
</ul>
```

```html
<ul class="menu-list">
  <li class="menu-list-item">
    <a href="#" class="menu">...</a>
  </li>
  <li class="menu-list-item">
    <a href="#" class="menu">...</a>
  </li>
  <li class="menu-list-item">
    <a href="#" class="menu">...</a>
  </li>
</ul>
```

```html
<ul class="tag-list">
  <li class="tag-list-item">
    <a href="#" class="tag">...</a>
  </li>
  <li class="tag-list-item">
    <a href="#" class="tag">...</a>
  </li>
  <li class="tag-list-item">
    <a href="#" class="tag">...</a>
  </li>
</ul>
```

### テーブル

テーブルもボタンと同じように、バリエーションを多く持ち得るコンポーネントです。

```html
<table class="table">...</table>
```

```html
<table class="table is-bordered">...</table>
```

```html
<table class="table is-narrow">...</table>
<table class="table is-relaxed">...</table>
```

```html
<table class="table is-striped">...</table>
```

```html
<table class="table is-narrow is-striped">...</table>
```

```html
<td class"is-collapsing"></td>
```

https://www.hypertextcandy.com/table-with-fixed-width-column

### フォーム

```html
<form class="form">
  <div class="form-group">
    <label for="" class="form-label">...</label>
    <input type="text" class="form-control" />
  </div>
</form>
```

```html
<div class="form-group">
  <label for="" class="form-label">...</label>
  <div class="select">
    <select>
      <option value="...">...</option>
    </select>
  </div>
</div>
```

### ナビゲーションバー

```html
<nav class="navbar">
  <!-- 左端のロゴなど -->
  <a href="#" class="navbar-brand">
    <img src="/images/logo.png" alt="" />
  </a>
  <div class="navbar-content">
    <!-- 左寄せメニュー -->
    <ul class="navbar-menu">
      <li class="navbar-menu-item">
        <a href="#" class="navbar-link">...</a>
      </li>
    </ul>
    <!-- 右寄せメニュー -->
    <ul class="navbar-menu">
      <li class="navbar-menu-item">
        <a href="#" class="navbar-link">...</a>
      </li>
    </ul>
  </div>
</nav>
```

### タイトル

```html
<h2 class="title">...</h2>
<h2 class="headline">...</h2>
```

### アバター

```html
<figure class="avatar">
  <img class="avatar-image" src="..." alt="..." />
  <figcaption class="avatar-username">...</figcaption>
</figure>
```

### パンくずリスト

```html
<nav class="breadcrumbs">
  <ul class="breadcrumb-list">
    <li class="breadcrumb-list-item">
      <a href="#" class="breadcrumb">...</a>
    </li>
    <li class="breadcrumb-list-item">
      <a href="#" class="breadcrumb">...</a>
    </li>
  </ul>
</nav>
```

```html
<nav class="breadcrumbs">
  <a href="#" class="breadcrumbs-link">...</a>
  <a href="#" class="breadcrumbs-link">...</a>
  <a href="#" class="breadcrumbs-link">...</a>
</nav>
```

### ページネーション

```html
<nav class="pagination">
  <a href="#" class="pagination-prev">前へ</a>
  <a href="#" class="pagination-link">1</a>
  <a href="#" class="pagination-link is-active">2</a>
  <a href="#" class="pagination-link">3</a>
  <span class="pagination-item">…</span>
  <a href="#" class="pagination-link">10</a>
  <a href="#" class="pagination-next">次へ</a>
</nav>
```

## ユーティリティ

### 文字

```html
<p class="text-small">...</p>
<p class="text-large">...</p>
<p class="text-xlarge">...</p>
```

```html
<p class="text-primary">...</p>
```

```html
<p class="text-bold">...</p>
```

### text-align

```html
<p class="text-right">右寄せ</p>
<p class="text-center">中央寄せ</p>
<p class="text-left">左寄せ</p>
```

### 余白

```html
<p class="margin-bottom-1">...</p>
<p class="margin-left-2">...</p>
```

```html
<p class="padding-top-3">...</p>
```

### Flexbox

```html
<div class="flexbox is-justify-between is-align-center">
  <div class="component">...</div>
  <div class="component">...</div>
</div>
```

## 参考

- [Bootstrap](https://getbootstrap.com/)
- [Bulma](https://bulma.io/documentation/components/)
- [Foundation](https://foundation.zurb.com/sites/docs/)
- [CSSのクラス名を決めるときに使うリストをつくりました](https://qiita.com/manabuyasuda/items/dbb76ed36970bec95470)   
- [HTMLとCSSクラスでよく使う命名について](https://qiita.com/pugiemonn/items/eaa597b79fe59a1f1506) 
