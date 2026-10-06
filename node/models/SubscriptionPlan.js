import { d64 as c0, d172 as c1, d912 as c2, d77 as c3, d1846 as c4, d1847 as c5, d2286 as c6, d63 as c7, d1950 as c8, d1949 as c9, d2322 as c10, d2323 as c11, d2324 as c12, d2321 as c13, d2325 as c14, d2354 as c15 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d2321 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2321;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["CategoryReference"]:c1(),["Image"]:c2(),["MoneyValue"]:c3(),["OrderLineItemModifier"]:c4(),["OrderLineItemTax"]:c5(),["SelectedProductOption"]:c6(),["SharedCodec17"]:c7(),["SharedCodec512"]:c8(),["SharedCodec513"]:c9(),["SharedCodec606"]:c10(),["SharedCodec607"]:c11(),["SharedCodec608"]:c12(),["SubscriptionPlan"]:c13(),["SubscriptionPlanLineItem"]:c14(),["TextModifierRequest"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionPlan(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
