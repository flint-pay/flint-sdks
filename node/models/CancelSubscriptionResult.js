import { d60 as c0, d142 as c1, d148 as c2, d152 as c3, d230 as c4, d82 as c5, d140 as c6, d106 as c7, d811 as c8, d69 as c9, d1686 as c10, d1687 as c11, d65 as c12, d2109 as c13, d367 as c14, d366 as c15, d59 as c16, d83 as c17, d107 as c18, d141 as c19, d37 as c20, d2142 as c21, d2143 as c22, d2144 as c23, d2135 as c24, d2145 as c25, d2154 as c26, d2174 as c27 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d142 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d142;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["CancelSubscriptionResult"]:c1(),["CardDetails"]:c2(),["CategoryReference"]:c3(),["ContractInfo"]:c4(),["ExpandedCustomerSummary"]:c5(),["ExpandedPaymentMethodSummary"]:c6(),["ExpandedSubscriptionPlanSummary"]:c7(),["Image"]:c8(),["MoneyValue"]:c9(),["OrderLineItemModifier"]:c10(),["OrderLineItemTax"]:c11(),["PostalAddress"]:c12(),["SelectedProductOption"]:c13(),["SharedCodec134"]:c14(),["SharedCodec135"]:c15(),["SharedCodec16"]:c16(),["SharedCodec21"]:c17(),["SharedCodec35"]:c18(),["SharedCodec42"]:c19(),["SharedCodec5"]:c20(),["SharedCodec543"]:c21(),["SharedCodec544"]:c22(),["SharedCodec545"]:c23(),["SubscriptionLineItem"]:c24(),["SubscriptionPlanLineItem"]:c25(),["SubscriptionServiceLocation"]:c26(),["TextModifierRequest"]:c27()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCancelSubscriptionResult(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
