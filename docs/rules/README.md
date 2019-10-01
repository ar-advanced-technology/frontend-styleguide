# コーディング規約

## 共通

| エンコーディング | 改行コード |
|:---:|:---:|
| UTF-8 | LF |

## HTML

```html
<!--
  インデントはスペース2個
  属性値はダブルクオートで囲む
  id属性値、class属性値はケバブケース
-->
<div id="super-element" class="sample other-class">
  <a href="#" class="link">click me</a>
</div>
```

そのほか、HTML の技術仕様を遵守します。

- [コンテンツモデル](https://developer.mozilla.org/ja/docs/Web/Guide/HTML/Content_categories)と呼ばれる各タグの入れ子関係のルールを厳守する（[参考チートシート](https://webgoto.net/html5/)）。
- `id` 属性値はページ内でユニークに。
- `id` および `class` 属性値は数字で始めない。

また、セマンティクスを最大限に考慮します。

## CSS

```css
/* インデントはスペース2個 */
.one { /* セレクタと中括弧の間にスペースを入れる */
  background-color: #FF6F61;
  opacity: 0.75; /* 小数にはゼロをつける */
}

/* ↑定義と↓定義の間は、一行空ける */
.two { /* 開き括弧は同じ行に */
  margin: 0 auto; /* ゼロ値には単位をつけない */
}

.three, /* 1行に1セレクタ */
.four,
.five {
  line-height: 1.6; /* line-heightには単位をつけない */
}
```

プロパティの記述順は、[stylelint-config-recess-order](https://github.com/stormwarning/stylelint-config-recess-order/blob/master/index.js) を採用します。関連するものを近くに並べることにより、作業効率や保守性の向上を狙っています。

`style` タグ、`style` 属性にはスタイル定義を記述しません。必ず CSS ファイルまたは Sass（Scss）ファイルに記述します。

## Scss

```scss
// インデントはスペース2個
.one {
  background-color: #FF6F61;
  opacity: 0.75;

  .two { // ネストする場合は、一行空ける
    margin: 0 auto;
  }
}
```

## JavaScript

### 変数

```javascript
// インデントはスペース2個

// 変数名はキャメルケース
// NG: AlphaBravo, alpha_bravo
const alphaBravo = 123;

// 配列を一行で書く場合は、'[]'の内側にスペースを入れない
const items = [1, 2, 3];

// オブジェクトを一行で書く場合は、'{}'の内側にスペースを入れる
const objectAlpha = { name: 'John', number: 42 };

// 長くなる場合は、複数行に分ける
const objectBravo = {
  one: 1,
  two: 2,
  three: 3,
  four: 4
};
```

### 制御構文

```javascript
// If文
if (items.length > 0) {
  // 演算子の左右にはスペースを入れる
  // '()'の前後にスペースを入れる
  // '()'の内側にはスペースを入れない
  // NG: if (items.length>0) {
  // NG: if(items.length > 0){
  // NG: if ( items.length > 0 ) {
}

// 中括弧なしの書き方も文法的には可能
if (items.length) return false;
// ただ、中括弧を使うかどうかの判断基準が不明確なので、
// 必ず中括弧を使うことにする
if (items.length) {
  return false;
}

// For文
for (let i = 0; i < items.length; i++) {
  // If文と同じルール
  // ';'の右にはスペースを入れる
}
```

### 関数

```javascript
// 基本的には普通のfunction定義を使う
function something(one, two) {
  // 関数名と'('の間はスペースなし
  // ')'と'{'の間はスペースあり
}

// 外側のスコープのthisを参照したい場合は、アロー関数を用いる
const anything = three => this.number * 3;

// たとえば、DOM操作系メソッドの引数には、function定義を使うことが多い
elem.addEventListener('click', function() {
  // 関数スコープでのthisを参照したい場合が多いため
  // 例えばここではthisでイベント発生元の要素を取得できる
  this.classList.add('...');
});

// DOMの関係ない、配列操作メソッドでは、アロー関数を使う
// 見やすいし、外側のスコープのthisを参照したいことが多いため
const superNumbers = items
  .filter(item => item.type === 'super')
  .map(item => item.number);
```
