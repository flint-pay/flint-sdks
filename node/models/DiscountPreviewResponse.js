import { d757 as c0, d759 as c1, d77 as c2, d1797 as c3, d1796 as c4, d2034 as c5, d2038 as c6, d2039 as c7, d2131 as c8, d2132 as c9, d14 as c10, d1795 as c11 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d759 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d759;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DiscountPreview"]:c0(),["DiscountPreviewResponse"]:c1(),["MoneyValue"]:c2(),["NextAction"]:c3(),["NextActionMerchantAccountSession"]:c4(),["PromotionCandidate"]:c5(),["PromotionCombinesWith"]:c6(),["PromotionExclusivity"]:c7(),["ResponseMeta"]:c8(),["ResponseWarning"]:c9(),["SharedCodec1"]:c10(),["SharedCodec485"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDiscountPreviewResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
