---
title: 付け方
meta:
  - name: description
    content: ベースとする思想の説明
---

# 付け方

## コンポーネントの機能・役割を元にシンプルに命名

```html
<table class="table">
  <tr>
  </tr>
</table>
```

### 見た目用のクラスには「is-」プレフィックス

見た目用のスタイルを指定するクラスには ```is-``` プレフィックスを付与する。  
プレフィックスを付与することで、そのクラスが何の役割を持っているかが一目で把握しやすくなる。  
ルールが整っているとコードの可読性があがる。

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

### 色名など用途が把握しづらい命名は避ける

// TODO  
見た目でクラスをつけている場合もある  
is-outline, is-stripe, is-narrow

属性値（具体的な値）をそのままクラスにしない  
抽象化されたクラス名  
保守性・再利用性、どっちも修正が必要になる、コードが膨大になる

```html
<!-- OK -->
<button clsss="button is-primary">ボタン</button>
<button clsss="button is-secondary">ボタン</button>
<button clsss="button is-disabled">ボタン</button>

<!-- NG -->
<button clsss="button is-red">ボタン</button>
<button clsss="button is-orange">ボタン</button>
<button clsss="button is-gray">ボタン</button>
```


## jsフック用のクラスには「js-」プレフィックス

jsフック用のクラスには ```js-``` プレフィックスを付与する。  
このクラスでは基本的にスタイルの操作は行わない。

```html
<button clsss="button js-modal-trigger">ボタン</button>
```
```js
document.querySelector('.js-modal-trigger').addEventListener('click', () => {
  console.log('モーダルを開きます');
})
```