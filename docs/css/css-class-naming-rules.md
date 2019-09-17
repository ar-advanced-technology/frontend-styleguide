---
title: クラスの命名ルール
meta:
  - name: description
    content: クラスの命名ルール
---

# クラスの命名ルール

## 文脈に依存させない
使用場面や中に入れるコンテンツを元にクラスを付与してしまうと、再利用性が下がってしまうので避けましょう。  
文脈から独立した、部品としての特徴を捉えたクラス名を付与します。

```html
<!-- OK -->
<button class="button is-primary">送信する</button>

<table class="table">
  <tr>
    ...
  </tr>
</table>

<!-- NG -->
<button class="button-submit">送信する</button>

<table class="news-list-table">
  <tr>
  </tr>
</table>
```

## 基本構造と見た目を分離
コンポーネントのクラス名には、基本構造のスタイルを指定します。  
色や大きさなど、バリエーションを増やしたい場合は専用のクラスを用意し、それを用いてスタイルを指定します。 

```html
<button clsss="button is-small is-outline">ボタン</button>
```
```scss
.button {
  display: inline-block;
  padding: 10px;
  color: #fff;
  font-size: 16px;
  background-color: #000;
  border-radius: 4px;

  &.is-outline {
    background-color: #fff;
    border: 1px solid #000;
  }

  &.is-small {
    font-size: 12px;
  }
}
```

## 色名などを命名は避ける
見た目などのバリエーションを展開する際に、具体的な値をそのまま用いることは避けましょう。

```html
<!-- OK -->
<button clsss="button is-primary">ボタン</button>
<button clsss="button is-disabled">ボタン</button>

<!-- NG -->
<button clsss="button is-red">ボタン</button>
<button clsss="button is-gray">ボタン</button>
```

サンプルコードを例にすると、サイト内で使用するボタンの色が赤ではなくなった場合、HTMLとCSSの両方の修正が発生し余計な工数が発生＝メンテナンス性が低いコードとなります。  

それを防ぐために、クラス名はできるだけ抽象化します。


## プレフィックスルール

### バリエーション
コンポーネントのバリエーション用のクラスには ```is-``` プレフィックスを付与します。

```html
<button clsss="button is-small is-outline">ボタン</button>
```
```scss
.button {
  &.is-outline {
    background-color: #fff;
    border: 1px solid #000;
  }

  &.is-small {
    font-size: 12px;
  }
}
```

### レイアウト
ヘッダーやフッター、サイドメニューなどの各ページ共通のレイアウトには、クラス名の前に ```layout-``` を付与します。  

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

### javascript
javascriptでDOMの取得・操作（jsフック）を行う要素には、専用のクラス名を付与します。   
操作用のクラスには ```js-``` プレフィックスを付与します。  

```html
<button clsss="button js-modal-trigger">ボタン</button>
```
```js
document.querySelector('.js-modal-trigger').addEventListener('click', () => {
  console.log('モーダルを開きます');
})
```

基本的に、このクラスでのスタイルの指定は行いません。  
見た目用のスタイルは別のクラスを用いて指定しましょう。