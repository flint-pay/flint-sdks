import { d825 as c0, d77 as c1, d1879 as c2, d2387 as c3 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d825 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d825;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["FulfillmentLineItem"]:c0(),["MoneyValue"]:c1(),["OrderLineItemModifier"]:c2(),["TextModifierRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFulfillmentLineItem(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
