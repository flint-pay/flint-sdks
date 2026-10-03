import { d508 as c0, d907 as c1, d74 as c2, d405 as c3, d1834 as c4, d407 as c5, d406 as c6, d404 as c7, d403 as c8, d1936 as c9, d1935 as c10, d2312 as c11, d2311 as c12, d2314 as c13, d2313 as c14, d2315 as c15, d2339 as c16 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d508 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d508;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateSubscriptionPlanRequest"]:c0(),["ImageRequest"]:c1(),["MoneyValue"]:c2(),["OrderLineItemModifierRequest"]:c3(),["OrderLineItemTax"]:c4(),["SharedCodec147"]:c5(),["SharedCodec148"]:c6(),["SharedCodec149"]:c7(),["SharedCodec150"]:c8(),["SharedCodec503"]:c9(),["SharedCodec504"]:c10(),["SharedCodec597"]:c11(),["SharedCodec598"]:c12(),["SharedCodec599"]:c13(),["SharedCodec600"]:c14(),["SubscriptionPlanLineItemRequest"]:c15(),["TextModifierRequest"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionPlanRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
