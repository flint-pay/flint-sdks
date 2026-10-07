import { d64 as c0, d175 as c1, d926 as c2, d77 as c3, d1824 as c4, d1823 as c5, d1873 as c6, d1874 as c7, d2158 as c8, d2159 as c9, d2313 as c10, d14 as c11, d63 as c12, d1822 as c13, d1977 as c14, d1976 as c15, d2349 as c16, d2350 as c17, d2351 as c18, d2348 as c19, d2352 as c20, d2359 as c21, d2381 as c22 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d2359 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2359;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["CategoryReference"]:c1(),["Image"]:c2(),["MoneyValue"]:c3(),["NextAction"]:c4(),["NextActionMerchantAccountSession"]:c5(),["OrderLineItemModifier"]:c6(),["OrderLineItemTax"]:c7(),["ResponseMeta"]:c8(),["ResponseWarning"]:c9(),["SelectedProductOption"]:c10(),["SharedCodec1"]:c11(),["SharedCodec17"]:c12(),["SharedCodec488"]:c13(),["SharedCodec515"]:c14(),["SharedCodec516"]:c15(),["SharedCodec609"]:c16(),["SharedCodec610"]:c17(),["SharedCodec611"]:c18(),["SubscriptionPlan"]:c19(),["SubscriptionPlanLineItem"]:c20(),["SubscriptionPlanResponse"]:c21(),["TextModifierRequest"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionPlanResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
