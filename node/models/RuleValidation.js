import { d11 as c0, d2303 as c1, d2304 as c2 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d2303 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2303;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Analysis"]:c0(),["RuleValidation"]:c1(),["RuleWarning"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRuleValidation(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
