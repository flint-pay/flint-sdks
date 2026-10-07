import { d64 as c0, d69 as c1, d176 as c2, d180 as c3, d95 as c4, d546 as c5, d121 as c6, d932 as c7, d77 as c8, d1879 as c9, d1880 as c10, d73 as c11, d2319 as c12, d63 as c13, d547 as c14, d96 as c15, d122 as c16, d1983 as c17, d1982 as c18, d41 as c19, d2339 as c20, d2356 as c21, d2357 as c22, d2358 as c23, d2341 as c24, d2349 as c25, d2359 as c26, d2340 as c27, d2387 as c28 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d2341 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2341;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["BuyerAction"]:c1(),["CardDetails"]:c2(),["CategoryReference"]:c3(),["ExpandedCustomerSummary"]:c4(),["ExpandedPaymentMethodSummary"]:c5(),["ExpandedSubscriptionPlanSummary"]:c6(),["Image"]:c7(),["MoneyValue"]:c8(),["OrderLineItemModifier"]:c9(),["OrderLineItemTax"]:c10(),["PostalAddress"]:c11(),["SelectedProductOption"]:c12(),["SharedCodec17"]:c13(),["SharedCodec203"]:c14(),["SharedCodec24"]:c15(),["SharedCodec40"]:c16(),["SharedCodec519"]:c17(),["SharedCodec520"]:c18(),["SharedCodec6"]:c19(),["SharedCodec610"]:c20(),["SharedCodec613"]:c21(),["SharedCodec614"]:c22(),["SharedCodec615"]:c23(),["Subscription"]:c24(),["SubscriptionLineItem"]:c25(),["SubscriptionPlanLineItem"]:c26(),["SubscriptionServiceLocation"]:c27(),["TextModifierRequest"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscription(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
