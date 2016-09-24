import assert from 'assert';
import { rollup } from 'rollup';
import { compile } from 'google-closure-compiler-js';
import { readFileSync } from 'fs';
import closure from '../dist/rollup-plugin-closure-compiler-js.es';

process.chdir('test');

describe('rollup-plugin-closure-compiler-js', function() {
    // because closure-compiler takes time
    this.timeout(0);

    it('should compile', () => {
        return rollup({
            entry: 'fixtures/unminified.js',
            plugins: [ closure() ]
        }).then(bundle => {
            const { code, map } = bundle.generate({
                format: 'cjs'
            });
            const jsFile = readFileSync('fixtures/unminified.js', 'utf-8');
            const { compiledCode } = compile({jsCode: [{src: jsFile}]});
            assert.equal(code, compiledCode+'\n');
        });
    });

    it('should compile via closure-compiler options', () => {
        return rollup({
            entry: 'fixtures/plain-file.js',
            plugins: [ closure({
                compilationLevel: 'WHITESPACE_ONLY'
            })]
        }).then(bundle => {
            const { code } = bundle.generate({
                format: 'cjs'
            });
            assert.equal(code, 'var foo="bar";var t=1+2;console.log(foo);console.log(t);\n');
        });
    });

    it('should compile with sourcemaps', () => {
        return rollup({
            entry: 'fixtures/sourcemap.js',
            plugins: [ closure() ],
        }).then(bundle => {
            const { map } = bundle.generate({
                format: 'cjs',
                sourceMap: true
            });

            assert.ok(map, 'has a source map');
            assert.equal(map.version, 3, 'source map has expected version');
            assert.ok(Array.isArray(map.sources), 'source map has sources array');
            assert.equal(map.sources.length, 2, 'source map has two sources');
            assert.ok(Array.isArray(map.names), 'source maps has names array');
            assert.ok(map.mappings, 'source map has mappings');
        });
    });
});