import { d36 as c0, d37 as c1, d38 as c2, d228 as c3, d77 as c4, d1879 as c5, d226 as c6, d227 as c7, d2385 as c8, d2387 as c9 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d228 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d228;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AvailableModifier"]:c0(),["AvailableModifierGroup"]:c1(),["AvailableModifierSelection"]:c2(),["CheckoutSessionRevisionConflictDetail"]:c3(),["MoneyValue"]:c4(),["OrderLineItemModifier"]:c5(),["SharedCodec58"]:c6(),["SignedMoney"]:c7(),["TextModifierConfig"]:c8(),["TextModifierRequest"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCheckoutSessionRevisionConflictDetail(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
