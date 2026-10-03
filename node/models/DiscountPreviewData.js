import { d748 as c0, d749 as c1, d74 as c2, d2019 as c3, d2025 as c4, d2026 as c5 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d749 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d749;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DiscountPreview"]:c0(),["DiscountPreviewData"]:c1(),["MoneyValue"]:c2(),["PromotionCandidate"]:c3(),["PromotionCombinesWith"]:c4(),["PromotionExclusivity"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDiscountPreviewData(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
