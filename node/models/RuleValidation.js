import { d11 as c0, d2303 as c1, d2304 as c2 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d2303 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2303;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Analysis"]:c0(),["RuleValidation"]:c1(),["RuleWarning"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRuleValidation(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
