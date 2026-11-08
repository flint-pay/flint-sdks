import { d15 as c0, d16 as c1, d17 as c2 } from '../descriptors/data/0.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5212 as c3 } from '../descriptors/data/231.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4312 as c4 } from '../descriptors/data/181.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5213 as c5, d5214 as c6 } from '../descriptors/data/232.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5607 as c7 } from '../descriptors/data/252.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d15 as d15 } from '../descriptors/data/0.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d15;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ApplyDiscountRequest"]:c0(),["ApplyDiscountRequestManual"]:c1(),["ApplyDiscountRequestPromotion"]:c2(),["ManualDiscountRequest"]:c3(),["MoneyValue"]:c4(),["PromotionRefInputPromotionCode"]:c5(),["PromotionRefInputPromotionID"]:c6(),["PromotionRefRequest"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeApplyDiscountRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
