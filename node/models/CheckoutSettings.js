import { d179 as c0, d181 as c1, d196 as c2 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d196 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d196;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutRecoveryEmailSettings"]:c0(),["CheckoutSavedPaymentDetailsSettings"]:c1(),["CheckoutSettings"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCheckoutSettings(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
