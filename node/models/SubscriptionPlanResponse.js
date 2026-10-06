import { d64 as c0, d176 as c1, d926 as c2, d77 as c3, d1823 as c4, d1822 as c5, d1872 as c6, d1873 as c7, d2157 as c8, d2158 as c9, d2312 as c10, d14 as c11, d63 as c12, d1821 as c13, d1976 as c14, d1975 as c15, d2348 as c16, d2349 as c17, d2350 as c18, d2347 as c19, d2351 as c20, d2358 as c21, d2380 as c22 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d2358 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2358;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["CategoryReference"]:c1(),["Image"]:c2(),["MoneyValue"]:c3(),["NextAction"]:c4(),["NextActionMerchantAccountSession"]:c5(),["OrderLineItemModifier"]:c6(),["OrderLineItemTax"]:c7(),["ResponseMeta"]:c8(),["ResponseWarning"]:c9(),["SelectedProductOption"]:c10(),["SharedCodec1"]:c11(),["SharedCodec17"]:c12(),["SharedCodec487"]:c13(),["SharedCodec514"]:c14(),["SharedCodec515"]:c15(),["SharedCodec608"]:c16(),["SharedCodec609"]:c17(),["SharedCodec610"]:c18(),["SubscriptionPlan"]:c19(),["SubscriptionPlanLineItem"]:c20(),["SubscriptionPlanResponse"]:c21(),["TextModifierRequest"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionPlanResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
