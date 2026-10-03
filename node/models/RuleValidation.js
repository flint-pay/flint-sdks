import { d9 as c0, d2260 as c1, d2261 as c2 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d2260 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2260;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Analysis"]:c0(),["RuleValidation"]:c1(),["RuleWarning"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRuleValidation(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
