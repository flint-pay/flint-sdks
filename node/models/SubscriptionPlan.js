import { d64 as c0, d176 as c1, d926 as c2, d77 as c3, d1872 as c4, d1873 as c5, d2312 as c6, d63 as c7, d1976 as c8, d1975 as c9, d2348 as c10, d2349 as c11, d2350 as c12, d2347 as c13, d2351 as c14, d2380 as c15 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d2347 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2347;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["CategoryReference"]:c1(),["Image"]:c2(),["MoneyValue"]:c3(),["OrderLineItemModifier"]:c4(),["OrderLineItemTax"]:c5(),["SelectedProductOption"]:c6(),["SharedCodec17"]:c7(),["SharedCodec514"]:c8(),["SharedCodec515"]:c9(),["SharedCodec608"]:c10(),["SharedCodec609"]:c11(),["SharedCodec610"]:c12(),["SubscriptionPlan"]:c13(),["SubscriptionPlanLineItem"]:c14(),["TextModifierRequest"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionPlan(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
