import {compile} from 'google-closure-compiler-js';
import logger from './logger';

export default function closure(flags = {}) {
    return {
        name: 'closure-compiler-js',
        transformBundle(code) {
            flags = Object.assign({
              createSourceMap: true,
              processCommonJsModules: true
            }, flags);
            flags.jsCode = [{
                src: code
            }];
            const output = compile(flags);
            if (logger(flags, output)) {
                throw new Error(`compilation error, ${output.errors.length} error${output.errors.length===0 || output.errors.length>1?'s':''}`);
            }
            return {code: output.compiledCode, map: output.sourceMap};
        }
    };
}
