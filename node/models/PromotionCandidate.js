import { d77 as c0, d2061 as c1, d2065 as c2, d2066 as c3 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d2061 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2061;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionCandidate"]:c1(),["PromotionCombinesWith"]:c2(),["PromotionExclusivity"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionCandidate(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
