import { d36 as c0, d37 as c1, d38 as c2, d224 as c3, d77 as c4, d1846 as c5, d222 as c6, d223 as c7, d2352 as c8, d2354 as c9 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d224 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d224;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AvailableModifier"]:c0(),["AvailableModifierGroup"]:c1(),["AvailableModifierSelection"]:c2(),["CheckoutSessionRevisionConflictDetail"]:c3(),["MoneyValue"]:c4(),["OrderLineItemModifier"]:c5(),["SharedCodec58"]:c6(),["SignedMoney"]:c7(),["TextModifierConfig"]:c8(),["TextModifierRequest"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCheckoutSessionRevisionConflictDetail(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
