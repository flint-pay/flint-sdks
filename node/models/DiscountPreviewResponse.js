import { d748 as c0, d749 as c1, d751 as c2, d74 as c3, d1784 as c4, d1783 as c5, d2020 as c6, d2026 as c7, d2027 as c8, d2119 as c9, d2120 as c10 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d751 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d751;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DiscountPreview"]:c0(),["DiscountPreviewData"]:c1(),["DiscountPreviewResponse"]:c2(),["MoneyValue"]:c3(),["NextAction"]:c4(),["NextActionMerchantAccountSession"]:c5(),["PromotionCandidate"]:c6(),["PromotionCombinesWith"]:c7(),["PromotionExclusivity"]:c8(),["ResponseMeta"]:c9(),["ResponseWarning"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDiscountPreviewResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
