import { d60 as c0, d148 as c1, d152 as c2, d82 as c3, d140 as c4, d106 as c5, d811 as c6, d69 as c7, d1686 as c8, d1687 as c9, d65 as c10, d2109 as c11, d367 as c12, d366 as c13, d59 as c14, d83 as c15, d107 as c16, d141 as c17, d37 as c18, d2142 as c19, d2143 as c20, d2144 as c21, d2128 as c22, d2135 as c23, d2145 as c24, d2154 as c25, d2174 as c26 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d2128 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2128;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["CardDetails"]:c1(),["CategoryReference"]:c2(),["ExpandedCustomerSummary"]:c3(),["ExpandedPaymentMethodSummary"]:c4(),["ExpandedSubscriptionPlanSummary"]:c5(),["Image"]:c6(),["MoneyValue"]:c7(),["OrderLineItemModifier"]:c8(),["OrderLineItemTax"]:c9(),["PostalAddress"]:c10(),["SelectedProductOption"]:c11(),["SharedCodec134"]:c12(),["SharedCodec135"]:c13(),["SharedCodec16"]:c14(),["SharedCodec21"]:c15(),["SharedCodec35"]:c16(),["SharedCodec42"]:c17(),["SharedCodec5"]:c18(),["SharedCodec543"]:c19(),["SharedCodec544"]:c20(),["SharedCodec545"]:c21(),["Subscription"]:c22(),["SubscriptionLineItem"]:c23(),["SubscriptionPlanLineItem"]:c24(),["SubscriptionServiceLocation"]:c25(),["TextModifierRequest"]:c26()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscription(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
