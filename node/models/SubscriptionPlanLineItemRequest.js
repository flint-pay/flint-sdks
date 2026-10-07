import { d314 as c0, d361 as c1, d1830 as c2, d363 as c3, d362 as c4, d360 as c5, d359 as c6, d1934 as c7, d1933 as c8, d2305 as c9, d2304 as c10, d2307 as c11, d2306 as c12, d2308 as c13, d2331 as c14 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d2308 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2308;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderLineItemModifierRequest"]:c1(),["OrderLineItemTax"]:c2(),["SharedCodec112"]:c3(),["SharedCodec113"]:c4(),["SharedCodec114"]:c5(),["SharedCodec115"]:c6(),["SharedCodec477"]:c7(),["SharedCodec478"]:c8(),["SharedCodec564"]:c9(),["SharedCodec565"]:c10(),["SharedCodec566"]:c11(),["SharedCodec567"]:c12(),["SubscriptionPlanLineItemRequest"]:c13(),["TextModifierRequest"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionPlanLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
