import { d368 as c0, d1776 as c1, d323 as c2, d2073 as c3, d30 as c4, d31 as c5, d2071 as c6, d2072 as c7 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d368 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d368;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateOrderDiscount"]:c0(),["ManualDiscountRequest"]:c1(),["MoneyValue"]:c2(),["PromotionRefRequest"]:c3(),["SharedCodec3"]:c4(),["SharedCodec4"]:c5(),["SharedCodec510"]:c6(),["SharedCodec511"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateOrderDiscount(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
