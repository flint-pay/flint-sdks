import { d750 as c0, d74 as c1, d2022 as c2, d2028 as c3, d2029 as c4 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d750 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d750;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DiscountPreview"]:c0(),["MoneyValue"]:c1(),["PromotionCandidate"]:c2(),["PromotionCombinesWith"]:c3(),["PromotionExclusivity"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDiscountPreview(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
