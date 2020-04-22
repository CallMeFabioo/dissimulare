<h1 align="center">
  <img src="logo.png" alt="Dissimulate">
</h1>

![Release](https://img.shields.io/github/v/release/CallMeFabioo/dissimulare?include_prereleases)
![CI](https://github.com/CallMeFabioo/dissimulare/workflows/Dissimulare%20CI/badge.svg)
![License](https://img.shields.io/npm/l/dissimulare)

> Simple mask library

## Install

```shell
npm install -S dissimulare
or
yarn add dissimulare
```

## Usages

#### Number

```js
import { mask } from 'dissimulare'

mask(12354379650, '999.999.999-99') // 123.543.796-50
```

#### String

```js
import { mask } from 'dissimulare'

mask('21416823454', '999.999.999.99') // 214.168.234.54
```

#### With letters

```js
import { mask } from 'dissimulare'

mask('E75336B6F76A', 'SS-SS-SS-SS-SS-SS') // E7-53-36-B6-F7-6A
```

#### As an Array

```js
const patterns = ['999.999.999-99', '99.999.999/9999-99']

mask('12354379650', patterns) // 123.543.796-50
mask('57808519000118', patterns) // 57.808.519/0001-18
```
