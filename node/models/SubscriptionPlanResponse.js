import { d61 as c0, d169 as c1, d905 as c2, d74 as c3, d1784 as c4, d1783 as c5, d1833 as c6, d1834 as c7, d2118 as c8, d2119 as c9, d2272 as c10, d60 as c11, d1936 as c12, d1935 as c13, d2307 as c14, d2308 as c15, d2309 as c16, d2306 as c17, d2310 as c18, d2317 as c19, d2339 as c20 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d2317 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2317;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["CategoryReference"]:c1(),["Image"]:c2(),["MoneyValue"]:c3(),["NextAction"]:c4(),["NextActionMerchantAccountSession"]:c5(),["OrderLineItemModifier"]:c6(),["OrderLineItemTax"]:c7(),["ResponseMeta"]:c8(),["ResponseWarning"]:c9(),["SelectedProductOption"]:c10(),["SharedCodec16"]:c11(),["SharedCodec503"]:c12(),["SharedCodec504"]:c13(),["SharedCodec594"]:c14(),["SharedCodec595"]:c15(),["SharedCodec596"]:c16(),["SubscriptionPlan"]:c17(),["SubscriptionPlanLineItem"]:c18(),["SubscriptionPlanResponse"]:c19(),["TextModifierRequest"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionPlanResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
