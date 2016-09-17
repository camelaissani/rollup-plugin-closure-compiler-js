import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';

var pkg = require('./package.json');

export default {
    entry: 'src/index.js',
    plugins: [babel(babelrc({
        addExternalHelpersPlugin: false
    }))],
    targets: [
        {
            format: 'cjs',
            dest: pkg['main']
        },
        {
            format: 'es',
            dest: pkg['jsnext:main']
        }
    ]
};