import { d77 as c0, d2060 as c1, d2064 as c2, d2065 as c3 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d2060 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2060;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionCandidate"]:c1(),["PromotionCombinesWith"]:c2(),["PromotionExclusivity"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionCandidate(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
