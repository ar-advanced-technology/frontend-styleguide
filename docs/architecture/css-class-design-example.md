---
title: 設計手順
meta:
  - name: description
    content: 
---

# 設計手順

## 1. 要素を箱で分ける

要素一つ一つを箱で囲み、ページがどんな構成になっているのかを把握します。  
まずは大枠のレイアウトから抜き出しましょう。

header, main, footerの画像

そこからさらに、細かい箱で分けていきます。
これがコンポーネントと呼ばれるものです。

partの画像

## 2. 要素のHTML構造を決める

箱を分けたら、その箱の中身をどのようなHTML構造で表現するべきかを決めます。  
それぞれの要素がどんな役割なのか、どんな情報を伝えようとしているのかを考慮し、適切なタグを使用します。

```html
  <section>
    <figure>
      <img src="" alt="">
    </figure>
    <div>
      <h2></h2>
    </div>
    <div>
      <p></p>
    </div>
  </section>
```

## 3. クラス名を付与する

HTML構造が決まったら、最後にクラス名を付与します。  

```html
  <section class="card">
    <figure class="card-image">
      <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt="">
    </figure>
    <div class="card-header">
      <h2 class="card-title">
        三位一体開発
      </h2>
    </div>
    <div class="card-body">
      <p class="card-description">
        プロデューサー、デザイナー、エンジニアの三位一体開発により、 
        ワンストップで事業部門のニーズへの迅速な対応とコスト削減を実現します。
      </p>
    </div>
  </section>
```

クラス名＝コンポーネント名、つまりサイト内で使い回す部品としての名称となります。  

コンポーネント内に細かい情報が含まれている場合、それらをサブコンポーネントと呼びます。  
上記の例の場合、```.card-image``` ```.card-header``` ```.card-title``` などがそれにあたります。  
命名ルールとして、```コンポーネント名-サブコンポーネント名``` のようにハイフン区切りで記述します。

また、コンポーネント名・サブコンポーネント名のどちらも、文脈に依存させず、部品の特徴を捉えたクラス名を付与することが望ましいです。  
詳しくは「[クラスの命名ルール](/css/css-class-naming-example)」ページを確認してください。