import {compile} from 'google-closure-compiler-js';

export default function (flags = {}) {
    return {
        name: 'closure-compiler-js',

        transformBundle(code, options) {
            // trigger sourcemap generation
            if (options.sourceMap !== false) {
                flags.createSourceMap = true;
            }

            flags.jsCode = [{
                src: code
            }];
            const {compiledCode, sourceMap} = compile(flags);

            const result = {code: compiledCode};
            if (sourceMap) {
                result.map = sourceMap;
            }

            return result;
        }
    };
}