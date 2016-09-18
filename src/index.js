import {compile} from 'google-closure-compiler-js';
import logger from './logger';

export default function clojure(options = {}) {
    return {
        name: 'closure-compiler-js',

        transformBundle(code) {

            options.jsCode = [{
                src: code
            }];
            options.createSourceMap = true;

            const output = compile(options);
            if (logger(options, output)) {
                throw {message: `Compilation error, ${output.errors.length} errors`};
            }

            const result = {code: output.compiledCode};
            if (output.sourceMap) {
                result.map = output.sourceMap;
            }

            return result;
        }
    };
}