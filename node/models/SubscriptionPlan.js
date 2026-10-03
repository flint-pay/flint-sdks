import { d61 as c0, d169 as c1, d905 as c2, d74 as c3, d1833 as c4, d1834 as c5, d2273 as c6, d60 as c7, d1937 as c8, d1936 as c9, d2308 as c10, d2309 as c11, d2310 as c12, d2307 as c13, d2311 as c14, d2340 as c15 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d2307 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2307;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["CategoryReference"]:c1(),["Image"]:c2(),["MoneyValue"]:c3(),["OrderLineItemModifier"]:c4(),["OrderLineItemTax"]:c5(),["SelectedProductOption"]:c6(),["SharedCodec16"]:c7(),["SharedCodec503"]:c8(),["SharedCodec504"]:c9(),["SharedCodec594"]:c10(),["SharedCodec595"]:c11(),["SharedCodec596"]:c12(),["SubscriptionPlan"]:c13(),["SubscriptionPlanLineItem"]:c14(),["TextModifierRequest"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionPlan(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
