import { d61 as c0, d66 as c1, d159 as c2, d165 as c3, d169 as c4, d247 as c5, d87 as c6, d157 as c7, d112 as c8, d905 as c9, d74 as c10, d1833 as c11, d1834 as c12, d70 as c13, d2272 as c14, d60 as c15, d88 as c16, d113 as c17, d156 as c18, d158 as c19, d38 as c20, d1936 as c21, d1935 as c22, d2307 as c23, d2308 as c24, d2309 as c25, d2300 as c26, d2310 as c27, d2319 as c28, d2339 as c29 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d159 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d159;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["BuyerAction"]:c1(),["CancelSubscriptionResult"]:c2(),["CardDetails"]:c3(),["CategoryReference"]:c4(),["ContractInfo"]:c5(),["ExpandedCustomerSummary"]:c6(),["ExpandedPaymentMethodSummary"]:c7(),["ExpandedSubscriptionPlanSummary"]:c8(),["Image"]:c9(),["MoneyValue"]:c10(),["OrderLineItemModifier"]:c11(),["OrderLineItemTax"]:c12(),["PostalAddress"]:c13(),["SelectedProductOption"]:c14(),["SharedCodec16"]:c15(),["SharedCodec21"]:c16(),["SharedCodec36"]:c17(),["SharedCodec44"]:c18(),["SharedCodec45"]:c19(),["SharedCodec5"]:c20(),["SharedCodec503"]:c21(),["SharedCodec504"]:c22(),["SharedCodec594"]:c23(),["SharedCodec595"]:c24(),["SharedCodec596"]:c25(),["SubscriptionLineItem"]:c26(),["SubscriptionPlanLineItem"]:c27(),["SubscriptionServiceLocation"]:c28(),["TextModifierRequest"]:c29()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCancelSubscriptionResult(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
