import { d64 as c0, d180 as c1, d932 as c2, d77 as c3, d1830 as c4, d1829 as c5, d1879 as c6, d1880 as c7, d2164 as c8, d2165 as c9, d2319 as c10, d14 as c11, d63 as c12, d1828 as c13, d1983 as c14, d1982 as c15, d2356 as c16, d2357 as c17, d2358 as c18, d2355 as c19, d2359 as c20, d2365 as c21, d2387 as c22 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d2365 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2365;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["CategoryReference"]:c1(),["Image"]:c2(),["MoneyValue"]:c3(),["NextAction"]:c4(),["NextActionMerchantAccountSession"]:c5(),["OrderLineItemModifier"]:c6(),["OrderLineItemTax"]:c7(),["ResponseMeta"]:c8(),["ResponseWarning"]:c9(),["SelectedProductOption"]:c10(),["SharedCodec1"]:c11(),["SharedCodec17"]:c12(),["SharedCodec492"]:c13(),["SharedCodec519"]:c14(),["SharedCodec520"]:c15(),["SharedCodec613"]:c16(),["SharedCodec614"]:c17(),["SharedCodec615"]:c18(),["SubscriptionPlan"]:c19(),["SubscriptionPlanLineItem"]:c20(),["SubscriptionPlanListResponse"]:c21(),["TextModifierRequest"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionPlanListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
