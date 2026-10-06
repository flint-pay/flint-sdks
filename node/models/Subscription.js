import { d64 as c0, d69 as c1, d168 as c2, d172 as c3, d90 as c4, d537 as c5, d116 as c6, d912 as c7, d77 as c8, d1846 as c9, d1847 as c10, d73 as c11, d2286 as c12, d63 as c13, d538 as c14, d91 as c15, d117 as c16, d1950 as c17, d1949 as c18, d41 as c19, d2306 as c20, d2322 as c21, d2323 as c22, d2324 as c23, d2307 as c24, d2315 as c25, d2325 as c26, d2334 as c27, d2354 as c28 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d2307 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2307;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["BuyerAction"]:c1(),["CardDetails"]:c2(),["CategoryReference"]:c3(),["ExpandedCustomerSummary"]:c4(),["ExpandedPaymentMethodSummary"]:c5(),["ExpandedSubscriptionPlanSummary"]:c6(),["Image"]:c7(),["MoneyValue"]:c8(),["OrderLineItemModifier"]:c9(),["OrderLineItemTax"]:c10(),["PostalAddress"]:c11(),["SelectedProductOption"]:c12(),["SharedCodec17"]:c13(),["SharedCodec202"]:c14(),["SharedCodec22"]:c15(),["SharedCodec38"]:c16(),["SharedCodec512"]:c17(),["SharedCodec513"]:c18(),["SharedCodec6"]:c19(),["SharedCodec603"]:c20(),["SharedCodec606"]:c21(),["SharedCodec607"]:c22(),["SharedCodec608"]:c23(),["Subscription"]:c24(),["SubscriptionLineItem"]:c25(),["SubscriptionPlanLineItem"]:c26(),["SubscriptionServiceLocation"]:c27(),["TextModifierRequest"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscription(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
