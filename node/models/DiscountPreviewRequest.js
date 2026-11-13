import { d6732 as c0, d6733 as c1, d6734 as c2, d6735 as c4 } from '../descriptors/data/310.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d599 as c3 } from '../descriptors/data/34.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5764 as c5 } from '../descriptors/data/255.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6076 as c6, d6077 as c7, d6078 as c8 } from '../descriptors/data/274.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d599 as d599 } from '../descriptors/data/34.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d599;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateOrderDiscount"]:c0(),["CreateOrderDiscountManual"]:c1(),["CreateOrderDiscountPromotion"]:c2(),["DiscountPreviewRequest"]:c3(),["ManualDiscountRequest"]:c4(),["MoneyValue"]:c5(),["PromotionRefInputPromotionCode"]:c6(),["PromotionRefInputPromotionID"]:c7(),["PromotionRefRequest"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDiscountPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
