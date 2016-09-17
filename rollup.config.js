import babel from 'rollup-plugin-babel';

var pkg = require('./package.json');

export default {
    entry: 'src/index.js',
    plugins: [babel({
        babelrc: false,
        presets: ['es2015-rollup']
    })],
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