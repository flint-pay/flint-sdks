import { d21 as c0 } from '../descriptors/data/0.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d8533 as c1, d8534 as c2 } from '../descriptors/data/402.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7604 as c3 } from '../descriptors/data/348.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6617 as c4 } from '../descriptors/data/291.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6945 as c5, d6946 as c6, d6947 as c7 } from '../descriptors/data/312.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d21 as d21 } from '../descriptors/data/0.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d21;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ApplyDiscountRequest"]:c0(),["ApplyDiscountRequestManual"]:c1(),["ApplyDiscountRequestPromotion"]:c2(),["ManualDiscountRequest"]:c3(),["MoneyValue"]:c4(),["PromotionRefInputPromotionCode"]:c5(),["PromotionRefInputPromotionID"]:c6(),["PromotionRefRequest"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeApplyDiscountRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
