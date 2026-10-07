import { d934 as c0, d77 as c1, d417 as c2, d1880 as c3, d419 as c4, d418 as c5, d416 as c6, d415 as c7, d1983 as c8, d1982 as c9, d2361 as c10, d2360 as c11, d2363 as c12, d2362 as c13, d2404 as c14, d2481 as c15, d2387 as c16, d2521 as c17, d2522 as c18 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d2522 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2522;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ImageRequest"]:c0(),["MoneyValue"]:c1(),["OrderLineItemModifierRequest"]:c2(),["OrderLineItemTax"]:c3(),["SharedCodec150"]:c4(),["SharedCodec151"]:c5(),["SharedCodec152"]:c6(),["SharedCodec153"]:c7(),["SharedCodec519"]:c8(),["SharedCodec520"]:c9(),["SharedCodec616"]:c10(),["SharedCodec617"]:c11(),["SharedCodec618"]:c12(),["SharedCodec619"]:c13(),["SharedCodec630"]:c14(),["SharedCodec664"]:c15(),["TextModifierRequest"]:c16(),["UpdateSubscriptionPlanLineItemRequest"]:c17(),["UpdateSubscriptionPlanRequest"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionPlanRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
