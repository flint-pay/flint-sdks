import { d5594 as c0 } from '../descriptors/data/251.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5212 as c1 } from '../descriptors/data/231.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4312 as c2 } from '../descriptors/data/181.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5213 as c3, d5214 as c4 } from '../descriptors/data/232.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5607 as c5 } from '../descriptors/data/252.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5594 as d5594 } from '../descriptors/data/251.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5594;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateOrderDiscountManual"]:c0(),["ManualDiscountRequest"]:c1(),["MoneyValue"]:c2(),["PromotionRefInputPromotionCode"]:c3(),["PromotionRefInputPromotionID"]:c4(),["PromotionRefRequest"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateOrderDiscountManual(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
