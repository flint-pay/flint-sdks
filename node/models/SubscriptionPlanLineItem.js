import { d61 as c0, d169 as c1, d74 as c2, d1833 as c3, d1834 as c4, d2273 as c5, d60 as c6, d1937 as c7, d1936 as c8, d2308 as c9, d2309 as c10, d2310 as c11, d2311 as c12, d2340 as c13 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d2311 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2311;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["CategoryReference"]:c1(),["MoneyValue"]:c2(),["OrderLineItemModifier"]:c3(),["OrderLineItemTax"]:c4(),["SelectedProductOption"]:c5(),["SharedCodec16"]:c6(),["SharedCodec503"]:c7(),["SharedCodec504"]:c8(),["SharedCodec594"]:c9(),["SharedCodec595"]:c10(),["SharedCodec596"]:c11(),["SubscriptionPlanLineItem"]:c12(),["TextModifierRequest"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionPlanLineItem(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
