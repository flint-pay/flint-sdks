import { d750 as c0, d751 as c1, d74 as c2, d2022 as c3, d2028 as c4, d2029 as c5 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d751 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d751;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DiscountPreview"]:c0(),["DiscountPreviewData"]:c1(),["MoneyValue"]:c2(),["PromotionCandidate"]:c3(),["PromotionCombinesWith"]:c4(),["PromotionExclusivity"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDiscountPreviewData(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
