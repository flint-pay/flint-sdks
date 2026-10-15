import { d749 as c0, d751 as c1, d323 as c2, d1823 as c3, d1824 as c4, d2077 as c5, d2082 as c6, d2083 as c7, d2178 as c8, d2179 as c9, d14 as c10, d1822 as c11 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d751 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d751;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DiscountPreview"]:c0(),["DiscountPreviewResponse"]:c1(),["MoneyValue"]:c2(),["NextAction"]:c3(),["NextActionMerchantAccountSession"]:c4(),["PromotionCandidate"]:c5(),["PromotionCombinesWith"]:c6(),["PromotionExclusivity"]:c7(),["ResponseMeta"]:c8(),["ResponseWarning"]:c9(),["SharedCodec1"]:c10(),["SharedCodec467"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDiscountPreviewResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
