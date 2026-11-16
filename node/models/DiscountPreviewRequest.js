import { d6798 as c0, d6799 as c1, d6800 as c2, d6801 as c4 } from '../descriptors/data/316.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d604 as c3 } from '../descriptors/data/34.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5814 as c5 } from '../descriptors/data/259.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6142 as c6, d6143 as c7, d6144 as c8 } from '../descriptors/data/280.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d604 as d604 } from '../descriptors/data/34.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d604;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateOrderDiscount"]:c0(),["CreateOrderDiscountManual"]:c1(),["CreateOrderDiscountPromotion"]:c2(),["DiscountPreviewRequest"]:c3(),["ManualDiscountRequest"]:c4(),["MoneyValue"]:c5(),["PromotionRefInputPromotionCode"]:c6(),["PromotionRefInputPromotionID"]:c7(),["PromotionRefRequest"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDiscountPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
