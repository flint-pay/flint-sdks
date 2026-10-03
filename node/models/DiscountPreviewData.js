import { d750 as c0, d751 as c1, d74 as c2, d2022 as c3, d2028 as c4, d2029 as c5 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d751 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d751;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DiscountPreview"]:c0(),["DiscountPreviewData"]:c1(),["MoneyValue"]:c2(),["PromotionCandidate"]:c3(),["PromotionCombinesWith"]:c4(),["PromotionExclusivity"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDiscountPreviewData(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
