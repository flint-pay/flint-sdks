import { d61 as c0, d171 as c1, d907 as c2, d74 as c3, d1786 as c4, d1785 as c5, d1835 as c6, d1836 as c7, d2121 as c8, d2122 as c9, d2275 as c10, d60 as c11, d1939 as c12, d1938 as c13, d2310 as c14, d2311 as c15, d2312 as c16, d2309 as c17, d2313 as c18, d2319 as c19, d2342 as c20 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d2319 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2319;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["CategoryReference"]:c1(),["Image"]:c2(),["MoneyValue"]:c3(),["NextAction"]:c4(),["NextActionMerchantAccountSession"]:c5(),["OrderLineItemModifier"]:c6(),["OrderLineItemTax"]:c7(),["ResponseMeta"]:c8(),["ResponseWarning"]:c9(),["SelectedProductOption"]:c10(),["SharedCodec16"]:c11(),["SharedCodec503"]:c12(),["SharedCodec504"]:c13(),["SharedCodec594"]:c14(),["SharedCodec595"]:c15(),["SharedCodec596"]:c16(),["SubscriptionPlan"]:c17(),["SubscriptionPlanLineItem"]:c18(),["SubscriptionPlanListResponse"]:c19(),["TextModifierRequest"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionPlanListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
