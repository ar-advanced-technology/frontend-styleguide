# 設計とは何か？

## はじめに

CSS は誰でも簡単に、自由に書くことができます。Java 言語のような型制約もありません。だからといって好き勝手に書いてしまうと、後にさまざまな混乱や問題に悩まされるでしょう。

不十分な設計による失敗：

::: danger
* 後からコードを見返したときに読み解くことができない
* 第三者への情報共有・引き継ぎが困難
* パーツが再利用できず、修正のたびにコードを追加
* スタイルの上書きが頻繁に行われている、!importantを多用している
* 修正した部分が意図しない箇所にも影響してしまう
* 何のために使っているか分からないスタイルが存在する

etc...
:::

逆に、思慮深く設計された CSS がもたらす恩恵は：

::: tip
* 予測しやすい
  * 予測した通りに動いてくれること
  * 他者が読んでも理解しやすいこと
* 再利用しやすい
  * 必要以上にコードを書かずに済む
* 保守しやすい
  * コードの修正や追加が簡単に行えること
* 拡張しやすい
:::

このガイドラインは、主に CSS や HTML を用いたフロントエンドコーディングにおける、設計と実装の方法を記載しています。

また、対象は Web アプリケーションの UI コーディングです。ただし一枚もののランディングページ（LP）やキャンペーンサイトについても、記載内容のほとんどを適用できるはずです。

## アプリケーションは変化する

業務システムや EC サイトなどの Web アプリケーションは、完成することがありません。いったんリリースされてからも、不具合の修正やユーザーからのフィードバックをもとに機能追加が行われ、ブラッシュアップされていきます。アプリケーションは、使われ続ける限り、変化を繰り返して成長します。

設計とは、将来の変更に備えることです。

設計の目的は、**出来るだけ少ない工数や影響範囲で将来の変更を実現すること**です。

この「出来るだけ少ない工数や影響範囲で将来の変更を実現」できること、またその度合いを、**保守性**（メンテナンス性）という言葉で表現することもあります。

## コンポーネント指向

### コンポーネント指向とは

上記の目的を達成するために、このガイドでは、**コンポーネント指向**という考え方を採用します。

コンポーネント指向とは、Web アプリケーションの UI を、コンポーネントの集合体として捉える考え方です。ページを組むのではなく、コンポーネントを組む、組んだコンポーネントを集めた結果としてページが出来上がるイメージです。

コンポーネントとは、Web アプリケーションの UI を構成する部品です。具体的には、見出しやボタン、テキストボックス、テーブル、リンクなどです。

具体的な手順は後述しますが、ざっくりいうと...

1. デザインファイルの全体を見渡す。
1. 視覚的な抽象化を行う。つまり、デザインファイル全体の中で特定の同一性をもつ部分を見つけ、コンポーネントとして切り出して名前をつける。
1. コンポーネントの文書構造を HTML によって記述する。また、視覚表現を CSS によって記述する。

### なぜコンポーネント指向？

ページ数の多い本格的な Web アプリケーションでも、何種類かのコンポーネントの集合としてページが成り立っています。

機能の追加や修正が発生するとページの項目は変わっていきますが、コンポーネント自体はそこまで頻繁に変わりません。たとえば機能追加のたびに新しいデザインのボタンが増えたら、統一感がなくなって、使いづらいアプリになってしまいますよね。

また仮にコンポーネントに変更が加わるなら、その変更には一貫性があるべきです。たとえば入力欄のデザインを変更する必要があるなら、すべてのページのすべての入力欄が同様に変更されるべきです。

そのため、コンポーネントにフォーカスすることが重要になってきます。変更のたびにいちいちページごとに新しく考え直すよりも、効率的なのです。

コンポーネントの設計をしっかり行うことで、どんな規模のアプリケーションでも効率よく開発を行うことができます。

### コンポーネント指向の実例

以下のような **CSS フレームワーク**は、コンポーネント指向のもっとも分かりやすい実践例と言えるでしょう。

- [Bootstrap](https://getbootstrap.com/)
- [Bulma](https://bulma.io/documentation/components/)
- [Foundation](https://foundation.zurb.com/sites/docs/)

CSS フレームワークとは、作り置きのコンポーネントのスタイル定義セットです。特定のサイトでの利用を想定しておらず、汎用的に作られています。そのため、デザインは簡素ですが、文脈に依存しない、独立性の高い設計がなされています。

このガイドにおける CSS 設計は、上記のフレームワークを大いに模倣しています。少々乱暴ですが、設計の目標は「特定のアプリ用の CSS フレームワークを作ること」とも言えるでしょう。