import { d61 as c0, d66 as c1, d165 as c2, d169 as c3, d87 as c4, d157 as c5, d112 as c6, d905 as c7, d74 as c8, d1833 as c9, d1834 as c10, d70 as c11, d2272 as c12, d60 as c13, d88 as c14, d113 as c15, d156 as c16, d158 as c17, d38 as c18, d1936 as c19, d1935 as c20, d2307 as c21, d2308 as c22, d2309 as c23, d2292 as c24, d2300 as c25, d2310 as c26, d2319 as c27, d2339 as c28 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d2292 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2292;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["BuyerAction"]:c1(),["CardDetails"]:c2(),["CategoryReference"]:c3(),["ExpandedCustomerSummary"]:c4(),["ExpandedPaymentMethodSummary"]:c5(),["ExpandedSubscriptionPlanSummary"]:c6(),["Image"]:c7(),["MoneyValue"]:c8(),["OrderLineItemModifier"]:c9(),["OrderLineItemTax"]:c10(),["PostalAddress"]:c11(),["SelectedProductOption"]:c12(),["SharedCodec16"]:c13(),["SharedCodec21"]:c14(),["SharedCodec36"]:c15(),["SharedCodec44"]:c16(),["SharedCodec45"]:c17(),["SharedCodec5"]:c18(),["SharedCodec503"]:c19(),["SharedCodec504"]:c20(),["SharedCodec594"]:c21(),["SharedCodec595"]:c22(),["SharedCodec596"]:c23(),["Subscription"]:c24(),["SubscriptionLineItem"]:c25(),["SubscriptionPlanLineItem"]:c26(),["SubscriptionServiceLocation"]:c27(),["TextModifierRequest"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscription(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
