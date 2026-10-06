import { d411 as c0, d767 as c1, d1776 as c2, d77 as c3, d2069 as c4, d30 as c5, d31 as c6, d2067 as c7, d2068 as c8 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d767 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d767;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateOrderDiscount"]:c0(),["DiscountPreviewRequest"]:c1(),["ManualDiscountRequest"]:c2(),["MoneyValue"]:c3(),["PromotionRefRequest"]:c4(),["SharedCodec3"]:c5(),["SharedCodec4"]:c6(),["SharedCodec532"]:c7(),["SharedCodec533"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDiscountPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
