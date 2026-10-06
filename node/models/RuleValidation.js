import { d11 as c0, d2298 as c1, d2299 as c2 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d2298 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2298;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Analysis"]:c0(),["RuleValidation"]:c1(),["RuleWarning"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRuleValidation(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
