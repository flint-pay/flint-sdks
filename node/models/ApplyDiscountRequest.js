import { d32 as c0, d1776 as c1, d77 as c2, d2069 as c3, d30 as c4, d31 as c5, d2067 as c6, d2068 as c7 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d32 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d32;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ApplyDiscountRequest"]:c0(),["ManualDiscountRequest"]:c1(),["MoneyValue"]:c2(),["PromotionRefRequest"]:c3(),["SharedCodec3"]:c4(),["SharedCodec4"]:c5(),["SharedCodec532"]:c6(),["SharedCodec533"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeApplyDiscountRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
