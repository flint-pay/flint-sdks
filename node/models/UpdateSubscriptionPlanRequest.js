import { d909 as c0, d74 as c1, d407 as c2, d1836 as c3, d409 as c4, d408 as c5, d406 as c6, d405 as c7, d1939 as c8, d1938 as c9, d2315 as c10, d2314 as c11, d2317 as c12, d2316 as c13, d2359 as c14, d2436 as c15, d2342 as c16, d2476 as c17, d2477 as c18 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d2477 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2477;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ImageRequest"]:c0(),["MoneyValue"]:c1(),["OrderLineItemModifierRequest"]:c2(),["OrderLineItemTax"]:c3(),["SharedCodec147"]:c4(),["SharedCodec148"]:c5(),["SharedCodec149"]:c6(),["SharedCodec150"]:c7(),["SharedCodec503"]:c8(),["SharedCodec504"]:c9(),["SharedCodec597"]:c10(),["SharedCodec598"]:c11(),["SharedCodec599"]:c12(),["SharedCodec600"]:c13(),["SharedCodec611"]:c14(),["SharedCodec645"]:c15(),["TextModifierRequest"]:c16(),["UpdateSubscriptionPlanLineItemRequest"]:c17(),["UpdateSubscriptionPlanRequest"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionPlanRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
