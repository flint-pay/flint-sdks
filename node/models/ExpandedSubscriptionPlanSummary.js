import { d61 as c0, d171 as c1, d112 as c2, d74 as c3, d1835 as c4, d1836 as c5, d2275 as c6, d60 as c7, d1939 as c8, d1938 as c9, d2310 as c10, d2311 as c11, d2312 as c12, d2313 as c13, d2342 as c14 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d112 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d112;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["CategoryReference"]:c1(),["ExpandedSubscriptionPlanSummary"]:c2(),["MoneyValue"]:c3(),["OrderLineItemModifier"]:c4(),["OrderLineItemTax"]:c5(),["SelectedProductOption"]:c6(),["SharedCodec16"]:c7(),["SharedCodec503"]:c8(),["SharedCodec504"]:c9(),["SharedCodec594"]:c10(),["SharedCodec595"]:c11(),["SharedCodec596"]:c12(),["SubscriptionPlanLineItem"]:c13(),["TextModifierRequest"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeExpandedSubscriptionPlanSummary(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
