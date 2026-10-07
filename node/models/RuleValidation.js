import { d11 as c0, d2305 as c1, d2306 as c2 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d2305 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2305;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Analysis"]:c0(),["RuleValidation"]:c1(),["RuleWarning"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRuleValidation(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
