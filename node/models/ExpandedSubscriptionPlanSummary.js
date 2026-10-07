import { d64 as c0, d180 as c1, d121 as c2, d77 as c3, d1879 as c4, d1880 as c5, d2319 as c6, d63 as c7, d1983 as c8, d1982 as c9, d2356 as c10, d2357 as c11, d2358 as c12, d2359 as c13, d2387 as c14 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d121 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d121;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["CategoryReference"]:c1(),["ExpandedSubscriptionPlanSummary"]:c2(),["MoneyValue"]:c3(),["OrderLineItemModifier"]:c4(),["OrderLineItemTax"]:c5(),["SelectedProductOption"]:c6(),["SharedCodec17"]:c7(),["SharedCodec519"]:c8(),["SharedCodec520"]:c9(),["SharedCodec613"]:c10(),["SharedCodec614"]:c11(),["SharedCodec615"]:c12(),["SubscriptionPlanLineItem"]:c13(),["TextModifierRequest"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeExpandedSubscriptionPlanSummary(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
