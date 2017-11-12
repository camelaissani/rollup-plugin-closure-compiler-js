# rollup-plugin-closure-compiler-js

[![license](https://img.shields.io/npm/l/rollup-plugin-closure-compiler-js.svg)](https://github.com/camelaissani/rollup-plugin-closure-compiler-js/blob/master/LICENSE)
[![Build Status](https://travis-ci.org/camelaissani/rollup-plugin-closure-compiler-js.svg)](https://travis-ci.org/camelaissani/rollup-plugin-closure-compiler-js)
[![dependencies Status](https://david-dm.org/camelaissani/rollup-plugin-closure-compiler-js/status.svg)](https://david-dm.org/camelaissani/rollup-plugin-closure-compiler-js)
[![devDependencies Status](https://david-dm.org/camelaissani/rollup-plugin-closure-compiler-js/dev-status.svg)](https://david-dm.org/camelaissani/rollup-plugin-closure-compiler-js?type=dev)


[![latest version](https://img.shields.io/npm/v/rollup-plugin-closure-compiler-js.svg)](https://www.npmjs.com/package/rollup-plugin-closure-compiler-js)
[![npm](https://img.shields.io/npm/dm/rollup-plugin-closure-compiler-js.svg)](https://www.npmjs.com/package/rollup-plugin-closure-compiler-js)

[Rollup](https://github.com/rollup/rollup) plugin for optimizing JavaScript with google-closure-compiler-js.

## Install

```sh
npm i rollup-plugin-closure-compiler-js -D
```

## Usage

```js
import { rollup } from 'rollup';
import closure from 'rollup-plugin-closure-compiler-js';

rollup({
    entry: 'main.js',
    plugins: [
        closure()
    ]
});
```

See [closure-compiler-js documentation](https://github.com/google/closure-compiler-js#flags) for more information about options.

# License

MIT ©
