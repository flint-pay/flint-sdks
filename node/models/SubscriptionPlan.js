import { d61 as c0, d169 as c1, d905 as c2, d74 as c3, d1833 as c4, d1834 as c5, d2272 as c6, d60 as c7, d1936 as c8, d1935 as c9, d2307 as c10, d2308 as c11, d2309 as c12, d2306 as c13, d2310 as c14, d2339 as c15 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d2306 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2306;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["CategoryReference"]:c1(),["Image"]:c2(),["MoneyValue"]:c3(),["OrderLineItemModifier"]:c4(),["OrderLineItemTax"]:c5(),["SelectedProductOption"]:c6(),["SharedCodec16"]:c7(),["SharedCodec503"]:c8(),["SharedCodec504"]:c9(),["SharedCodec594"]:c10(),["SharedCodec595"]:c11(),["SharedCodec596"]:c12(),["SubscriptionPlan"]:c13(),["SubscriptionPlanLineItem"]:c14(),["TextModifierRequest"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionPlan(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
