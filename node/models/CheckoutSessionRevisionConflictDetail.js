import { d36 as c0, d37 as c1, d38 as c2, d195 as c3, d323 as c4, d1874 as c5, d194 as c6, d2017 as c7, d2413 as c8, d2415 as c9 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d195 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d195;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AvailableModifier"]:c0(),["AvailableModifierGroup"]:c1(),["AvailableModifierSelection"]:c2(),["CheckoutSessionRevisionConflictDetail"]:c3(),["MoneyValue"]:c4(),["OrderLineItemModifier"]:c5(),["SharedCodec33"]:c6(),["SignedMoney"]:c7(),["TextModifierConfig"]:c8(),["TextModifierRequest"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCheckoutSessionRevisionConflictDetail(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
