[![npm][npm]][npm-url]
[![deps][deps]][deps-url]
[![test][test]][test-url]
[![coverage][cover]][cover-url]
[![chat][chat]][chat-url]

<div align="center">
  <a href="https://webpack.js.org/">
    <img width="200" height="200" vspace="" hspace="25" src="https://cdn.rawgit.com/webpack/media/e7485eb2/logo/icon-square-big.svg">
  </a>
  <h1>gzip-loader</h1>
  <p>gzip loader module for webpack</p>
</div>

<h2 align="center">Install</h2>

```bash
npm install --save-dev gzip-loader
```

<h2 align="center">Usage</h2>

**webpack.config.js**

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.gz$/,
        enforce: 'pre',
        use: 'gzip-loader'
      }
    ]
  }
}
```

**bundle.js**

```js
require("gzip-loader!./file.js.gz");
```

<h2 align="center">Maintainers</h2>

<table>
  <tbody>
    <tr>
      <td align="center">
        <a href="https://github.com/jdalton">
          <img width="150" height="150" src="https://avatars.githubusercontent.com/u/4303?v=3&s=150">
          </br>
          John-David Dalton
        </a>
      </td>
    </tr>
  <tbody>
</table>

[npm]: https://img.shields.io/npm/v/gzip-loader.svg
[npm-url]: https://npmjs.com/package/gzip-loader

[deps]: https://david-dm.org/webpack-contrib/gzip-loader.svg
[deps-url]: https://david-dm.org/webpack-contrib/gzip-loader

[chat]: https://img.shields.io/badge/gitter-webpack%2Fwebpack-brightgreen.svg
[chat-url]: https://gitter.im/webpack/webpack

[test]: http://img.shields.io/travis/webpack-contrib/gzip-loader.svg
[test-url]: https://travis-ci.org/webpack-contrib/gzip-loader

[cover]: https://codecov.io/gh/webpack-contrib/gzip-loader/branch/master/graph/badge.svg
[cover-url]: https://codecov.io/gh/webpack-contrib/gzip-loader
