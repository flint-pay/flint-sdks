import { d77 as c0, d417 as c1, d1880 as c2, d419 as c3, d418 as c4, d416 as c5, d415 as c6, d1983 as c7, d1982 as c8, d2361 as c9, d2360 as c10, d2363 as c11, d2362 as c12, d2364 as c13, d2387 as c14 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d2364 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2364;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderLineItemModifierRequest"]:c1(),["OrderLineItemTax"]:c2(),["SharedCodec150"]:c3(),["SharedCodec151"]:c4(),["SharedCodec152"]:c5(),["SharedCodec153"]:c6(),["SharedCodec519"]:c7(),["SharedCodec520"]:c8(),["SharedCodec616"]:c9(),["SharedCodec617"]:c10(),["SharedCodec618"]:c11(),["SharedCodec619"]:c12(),["SubscriptionPlanLineItemRequest"]:c13(),["TextModifierRequest"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionPlanLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
