import { d64 as c0, d69 as c1, d172 as c2, d176 as c3, d90 as c4, d545 as c5, d116 as c6, d926 as c7, d77 as c8, d1872 as c9, d1873 as c10, d73 as c11, d2312 as c12, d63 as c13, d546 as c14, d91 as c15, d117 as c16, d1976 as c17, d1975 as c18, d41 as c19, d2332 as c20, d2348 as c21, d2349 as c22, d2350 as c23, d2333 as c24, d2341 as c25, d2351 as c26, d2360 as c27, d2380 as c28 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d2333 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2333;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["BuyerAction"]:c1(),["CardDetails"]:c2(),["CategoryReference"]:c3(),["ExpandedCustomerSummary"]:c4(),["ExpandedPaymentMethodSummary"]:c5(),["ExpandedSubscriptionPlanSummary"]:c6(),["Image"]:c7(),["MoneyValue"]:c8(),["OrderLineItemModifier"]:c9(),["OrderLineItemTax"]:c10(),["PostalAddress"]:c11(),["SelectedProductOption"]:c12(),["SharedCodec17"]:c13(),["SharedCodec203"]:c14(),["SharedCodec22"]:c15(),["SharedCodec38"]:c16(),["SharedCodec514"]:c17(),["SharedCodec515"]:c18(),["SharedCodec6"]:c19(),["SharedCodec605"]:c20(),["SharedCodec608"]:c21(),["SharedCodec609"]:c22(),["SharedCodec610"]:c23(),["Subscription"]:c24(),["SubscriptionLineItem"]:c25(),["SubscriptionPlanLineItem"]:c26(),["SubscriptionServiceLocation"]:c27(),["TextModifierRequest"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscription(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
