import { d748 as c0, d749 as c1, d74 as c2, d2020 as c3, d2026 as c4, d2027 as c5 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d749 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d749;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DiscountPreview"]:c0(),["DiscountPreviewData"]:c1(),["MoneyValue"]:c2(),["PromotionCandidate"]:c3(),["PromotionCombinesWith"]:c4(),["PromotionExclusivity"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDiscountPreviewData(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
