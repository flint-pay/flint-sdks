import { d59 as c0, d61 as c1, d64 as c2, d131 as c3, d135 as c4, d90 as c5, d489 as c6, d749 as c7, d868 as c8, d314 as c9, d1829 as c10, d1830 as c11, d66 as c12, d2268 as c13, d91 as c14, d490 as c15, d1796 as c16, d1934 as c17, d1933 as c18, d2301 as c19, d2302 as c20, d2286 as c21, d2293 as c22, d2294 as c23, d2303 as c24, d2312 as c25, d2331 as c26 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d2286 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2286;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["BundleComponentVariantSummary"]:c1(),["BuyerAction"]:c2(),["CardDetails"]:c3(),["CategoryReference"]:c4(),["ExpandedCustomerSummary"]:c5(),["ExpandedPaymentMethodSummary"]:c6(),["ExpandedSubscriptionPlanSummary"]:c7(),["Image"]:c8(),["MoneyValue"]:c9(),["OrderLineItemModifier"]:c10(),["OrderLineItemTax"]:c11(),["PostalAddress"]:c12(),["SelectedProductOption"]:c13(),["SharedCodec16"]:c14(),["SharedCodec165"]:c15(),["SharedCodec453"]:c16(),["SharedCodec477"]:c17(),["SharedCodec478"]:c18(),["SharedCodec562"]:c19(),["SharedCodec563"]:c20(),["Subscription"]:c21(),["SubscriptionCancellationDetails"]:c22(),["SubscriptionLineItem"]:c23(),["SubscriptionPlanLineItem"]:c24(),["SubscriptionServiceLocation"]:c25(),["TextModifierRequest"]:c26()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscription(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
