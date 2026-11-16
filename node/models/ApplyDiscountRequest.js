import { d21 as c0 } from '../descriptors/data/0.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7730 as c1, d7731 as c2 } from '../descriptors/data/370.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6801 as c3 } from '../descriptors/data/316.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5814 as c4 } from '../descriptors/data/259.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6142 as c5, d6143 as c6, d6144 as c7 } from '../descriptors/data/280.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d21 as d21 } from '../descriptors/data/0.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d21;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ApplyDiscountRequest"]:c0(),["ApplyDiscountRequestManual"]:c1(),["ApplyDiscountRequestPromotion"]:c2(),["ManualDiscountRequest"]:c3(),["MoneyValue"]:c4(),["PromotionRefInputPromotionCode"]:c5(),["PromotionRefInputPromotionID"]:c6(),["PromotionRefRequest"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeApplyDiscountRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
