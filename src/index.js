import path from 'path';
import { readFileSync } from 'fs';
import {compile} from 'google-closure-compiler-js';
import logger from './logger';

export default function closure(flags = {}) {
    flags.createSourceMap = true;
    flags.processCommonJsModules = true;
    flags.warningLevel = flags.warningLevel || 'VERBOSE';

    return {
        name: 'closure-compiler-js',
        load(id) {
            if (!flags.jsCode) {
                flags.jsCode = [];
            }
            flags.jsCode.unshift({
                path: path.relative(process.cwd(), id),
                src: readFileSync(id, 'utf-8')
            });
        },
        // options(opts) {
        //     console.log(opts);
        //     if (opts.sourceMap) {
        //         flags.createSourceMap = true;
        //     }
        //     return opts;
        // },
        transformBundle(code) {
            const output = compile(flags);
            if (logger(flags, output)) {
                throw {message: `compilation error, ${output.errors.length} error${output.errors.length===0 || output.errors.length>1?'s':''}`};
            }
            const result = {code: output.compiledCode};
            if (output.sourceMap) {
                result.map = output.sourceMap;
            }

            return result;
        }
    };
}