import { d750 as c0, d751 as c1, d753 as c2, d74 as c3, d1786 as c4, d1785 as c5, d2022 as c6, d2028 as c7, d2029 as c8, d2121 as c9, d2122 as c10 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d753 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d753;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DiscountPreview"]:c0(),["DiscountPreviewData"]:c1(),["DiscountPreviewResponse"]:c2(),["MoneyValue"]:c3(),["NextAction"]:c4(),["NextActionMerchantAccountSession"]:c5(),["PromotionCandidate"]:c6(),["PromotionCombinesWith"]:c7(),["PromotionExclusivity"]:c8(),["ResponseMeta"]:c9(),["ResponseWarning"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDiscountPreviewResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
