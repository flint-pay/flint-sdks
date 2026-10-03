import { d907 as c0, d74 as c1, d405 as c2, d1834 as c3, d407 as c4, d406 as c5, d404 as c6, d403 as c7, d1936 as c8, d1935 as c9, d2312 as c10, d2311 as c11, d2314 as c12, d2313 as c13, d2356 as c14, d2433 as c15, d2339 as c16, d2473 as c17, d2474 as c18 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d2474 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2474;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ImageRequest"]:c0(),["MoneyValue"]:c1(),["OrderLineItemModifierRequest"]:c2(),["OrderLineItemTax"]:c3(),["SharedCodec147"]:c4(),["SharedCodec148"]:c5(),["SharedCodec149"]:c6(),["SharedCodec150"]:c7(),["SharedCodec503"]:c8(),["SharedCodec504"]:c9(),["SharedCodec597"]:c10(),["SharedCodec598"]:c11(),["SharedCodec599"]:c12(),["SharedCodec600"]:c13(),["SharedCodec611"]:c14(),["SharedCodec645"]:c15(),["TextModifierRequest"]:c16(),["UpdateSubscriptionPlanLineItemRequest"]:c17(),["UpdateSubscriptionPlanRequest"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionPlanRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
