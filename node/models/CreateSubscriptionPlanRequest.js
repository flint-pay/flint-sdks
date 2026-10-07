import { d519 as c0, d934 as c1, d77 as c2, d417 as c3, d1880 as c4, d419 as c5, d418 as c6, d416 as c7, d415 as c8, d1983 as c9, d1982 as c10, d2361 as c11, d2360 as c12, d2363 as c13, d2362 as c14, d2364 as c15, d2387 as c16 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d519 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d519;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateSubscriptionPlanRequest"]:c0(),["ImageRequest"]:c1(),["MoneyValue"]:c2(),["OrderLineItemModifierRequest"]:c3(),["OrderLineItemTax"]:c4(),["SharedCodec150"]:c5(),["SharedCodec151"]:c6(),["SharedCodec152"]:c7(),["SharedCodec153"]:c8(),["SharedCodec519"]:c9(),["SharedCodec520"]:c10(),["SharedCodec616"]:c11(),["SharedCodec617"]:c12(),["SharedCodec618"]:c13(),["SharedCodec619"]:c14(),["SubscriptionPlanLineItemRequest"]:c15(),["TextModifierRequest"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionPlanRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
