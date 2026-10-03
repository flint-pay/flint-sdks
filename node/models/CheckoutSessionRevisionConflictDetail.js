import { d33 as c0, d34 as c1, d35 as c2, d221 as c3, d74 as c4, d1835 as c5, d1806 as c6, d2340 as c7, d2342 as c8 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d221 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d221;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AvailableModifier"]:c0(),["AvailableModifierGroup"]:c1(),["AvailableModifierSelection"]:c2(),["CheckoutSessionRevisionConflictDetail"]:c3(),["MoneyValue"]:c4(),["OrderLineItemModifier"]:c5(),["SignedMoney"]:c6(),["TextModifierConfig"]:c7(),["TextModifierRequest"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCheckoutSessionRevisionConflictDetail(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
