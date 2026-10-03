import { d74 as c0, d405 as c1, d1834 as c2, d407 as c3, d406 as c4, d404 as c5, d403 as c6, d1936 as c7, d1935 as c8, d2312 as c9, d2311 as c10, d2314 as c11, d2313 as c12, d2315 as c13, d2339 as c14 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d2315 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2315;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderLineItemModifierRequest"]:c1(),["OrderLineItemTax"]:c2(),["SharedCodec147"]:c3(),["SharedCodec148"]:c4(),["SharedCodec149"]:c5(),["SharedCodec150"]:c6(),["SharedCodec503"]:c7(),["SharedCodec504"]:c8(),["SharedCodec597"]:c9(),["SharedCodec598"]:c10(),["SharedCodec599"]:c11(),["SharedCodec600"]:c12(),["SubscriptionPlanLineItemRequest"]:c13(),["TextModifierRequest"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionPlanLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
