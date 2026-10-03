import { d748 as c0, d74 as c1, d2020 as c2, d2026 as c3, d2027 as c4 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d748 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d748;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DiscountPreview"]:c0(),["MoneyValue"]:c1(),["PromotionCandidate"]:c2(),["PromotionCombinesWith"]:c3(),["PromotionExclusivity"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDiscountPreview(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
