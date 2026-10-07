import { d870 as c0, d314 as c1, d361 as c2, d1830 as c3, d363 as c4, d362 as c5, d360 as c6, d359 as c7, d1934 as c8, d1933 as c9, d2305 as c10, d2304 as c11, d2307 as c12, d2306 as c13, d2349 as c14, d2426 as c15, d2331 as c16, d2466 as c17, d2467 as c18 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d2467 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2467;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ImageRequest"]:c0(),["MoneyValue"]:c1(),["OrderLineItemModifierRequest"]:c2(),["OrderLineItemTax"]:c3(),["SharedCodec112"]:c4(),["SharedCodec113"]:c5(),["SharedCodec114"]:c6(),["SharedCodec115"]:c7(),["SharedCodec477"]:c8(),["SharedCodec478"]:c9(),["SharedCodec564"]:c10(),["SharedCodec565"]:c11(),["SharedCodec566"]:c12(),["SharedCodec567"]:c13(),["SharedCodec577"]:c14(),["SharedCodec611"]:c15(),["TextModifierRequest"]:c16(),["UpdateSubscriptionPlanLineItemRequest"]:c17(),["UpdateSubscriptionPlanRequest"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionPlanRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
