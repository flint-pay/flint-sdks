import { d7699 as c0 } from '../descriptors/data/369.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6771 as c1 } from '../descriptors/data/315.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5784 as c2 } from '../descriptors/data/258.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6112 as c3, d6113 as c4, d6114 as c5 } from '../descriptors/data/279.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d7699 as d7699 } from '../descriptors/data/369.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7699;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ApplyDiscountRequestManual"]:c0(),["ManualDiscountRequest"]:c1(),["MoneyValue"]:c2(),["PromotionRefInputPromotionCode"]:c3(),["PromotionRefInputPromotionID"]:c4(),["PromotionRefRequest"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeApplyDiscountRequestManual(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
