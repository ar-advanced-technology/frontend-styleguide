---
title: CSS記述ルール
meta:
  - name: description
    content: CSSに関するルールの説明
---

## 開き括弧は同じ行に

```css
/* OK */
.button {
  width: 200px;
}

/* NG */
.button
{
  width: 200px;
}
```


## 一行に一セレクタ

```css
/* OK */
input,
textarea,
select {
  background: #ddd;
}

/* NG */
input, textarea, select {
  background: #ddd;
}
```


## クラス・プロパティ名の後ろのスペースを付与する

可読性を高めるため、クラス名やプロパティの後ろにスペースを付与する。

```css
/* OK */
.button {
  width: 200px;
  background-color: #f00;
}

/* NG */
.button{
  width:200px;
  background-color:#f00;
}
```


## プロパティをまとめる

## カラーの指定は16真数で
### 3桁表記できるのはまとめる

## !importantは極力使用しない