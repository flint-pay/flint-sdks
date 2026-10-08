import { d739 as c0, d741 as c1, d323 as c2, d1820 as c3, d1821 as c4, d2060 as c5, d2065 as c6, d2066 as c7, d2162 as c8, d2163 as c9, d14 as c10, d1819 as c11 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d741 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d741;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DiscountPreview"]:c0(),["DiscountPreviewResponse"]:c1(),["MoneyValue"]:c2(),["NextAction"]:c3(),["NextActionMerchantAccountSession"]:c4(),["PromotionCandidate"]:c5(),["PromotionCombinesWith"]:c6(),["PromotionExclusivity"]:c7(),["ResponseMeta"]:c8(),["ResponseWarning"]:c9(),["SharedCodec1"]:c10(),["SharedCodec466"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDiscountPreviewResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
