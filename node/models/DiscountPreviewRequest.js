import { d368 as c0, d740 as c1, d1776 as c2, d323 as c3, d2073 as c4, d30 as c5, d31 as c6, d2071 as c7, d2072 as c8 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d740 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d740;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateOrderDiscount"]:c0(),["DiscountPreviewRequest"]:c1(),["ManualDiscountRequest"]:c2(),["MoneyValue"]:c3(),["PromotionRefRequest"]:c4(),["SharedCodec3"]:c5(),["SharedCodec4"]:c6(),["SharedCodec510"]:c7(),["SharedCodec511"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDiscountPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
