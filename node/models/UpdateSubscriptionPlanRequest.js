import { d907 as c0, d74 as c1, d405 as c2, d1834 as c3, d407 as c4, d406 as c5, d404 as c6, d403 as c7, d1937 as c8, d1936 as c9, d2313 as c10, d2312 as c11, d2315 as c12, d2314 as c13, d2357 as c14, d2434 as c15, d2340 as c16, d2474 as c17, d2475 as c18 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d2475 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2475;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ImageRequest"]:c0(),["MoneyValue"]:c1(),["OrderLineItemModifierRequest"]:c2(),["OrderLineItemTax"]:c3(),["SharedCodec147"]:c4(),["SharedCodec148"]:c5(),["SharedCodec149"]:c6(),["SharedCodec150"]:c7(),["SharedCodec503"]:c8(),["SharedCodec504"]:c9(),["SharedCodec597"]:c10(),["SharedCodec598"]:c11(),["SharedCodec599"]:c12(),["SharedCodec600"]:c13(),["SharedCodec611"]:c14(),["SharedCodec645"]:c15(),["TextModifierRequest"]:c16(),["UpdateSubscriptionPlanLineItemRequest"]:c17(),["UpdateSubscriptionPlanRequest"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionPlanRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
