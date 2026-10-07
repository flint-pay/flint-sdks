import { d64 as c0, d180 as c1, d77 as c2, d1879 as c3, d1880 as c4, d2319 as c5, d63 as c6, d1983 as c7, d1982 as c8, d2356 as c9, d2357 as c10, d2358 as c11, d2359 as c12, d2387 as c13 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d2359 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2359;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["CategoryReference"]:c1(),["MoneyValue"]:c2(),["OrderLineItemModifier"]:c3(),["OrderLineItemTax"]:c4(),["SelectedProductOption"]:c5(),["SharedCodec17"]:c6(),["SharedCodec519"]:c7(),["SharedCodec520"]:c8(),["SharedCodec613"]:c9(),["SharedCodec614"]:c10(),["SharedCodec615"]:c11(),["SubscriptionPlanLineItem"]:c12(),["TextModifierRequest"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionPlanLineItem(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
