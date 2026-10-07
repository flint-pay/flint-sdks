import { d766 as c0, d77 as c1, d2061 as c2, d2065 as c3, d2066 as c4 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d766 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d766;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DiscountPreview"]:c0(),["MoneyValue"]:c1(),["PromotionCandidate"]:c2(),["PromotionCombinesWith"]:c3(),["PromotionExclusivity"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDiscountPreview(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
