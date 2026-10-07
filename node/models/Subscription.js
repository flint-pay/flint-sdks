import { d64 as c0, d69 as c1, d171 as c2, d175 as c3, d90 as c4, d545 as c5, d116 as c6, d926 as c7, d77 as c8, d1873 as c9, d1874 as c10, d73 as c11, d2313 as c12, d63 as c13, d546 as c14, d91 as c15, d117 as c16, d1977 as c17, d1976 as c18, d41 as c19, d2333 as c20, d2349 as c21, d2350 as c22, d2351 as c23, d2334 as c24, d2342 as c25, d2352 as c26, d2361 as c27, d2381 as c28 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d2334 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2334;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["BuyerAction"]:c1(),["CardDetails"]:c2(),["CategoryReference"]:c3(),["ExpandedCustomerSummary"]:c4(),["ExpandedPaymentMethodSummary"]:c5(),["ExpandedSubscriptionPlanSummary"]:c6(),["Image"]:c7(),["MoneyValue"]:c8(),["OrderLineItemModifier"]:c9(),["OrderLineItemTax"]:c10(),["PostalAddress"]:c11(),["SelectedProductOption"]:c12(),["SharedCodec17"]:c13(),["SharedCodec203"]:c14(),["SharedCodec22"]:c15(),["SharedCodec38"]:c16(),["SharedCodec515"]:c17(),["SharedCodec516"]:c18(),["SharedCodec6"]:c19(),["SharedCodec606"]:c20(),["SharedCodec609"]:c21(),["SharedCodec610"]:c22(),["SharedCodec611"]:c23(),["Subscription"]:c24(),["SubscriptionLineItem"]:c25(),["SubscriptionPlanLineItem"]:c26(),["SubscriptionServiceLocation"]:c27(),["TextModifierRequest"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscription(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
