import { d5035 as c0, d5036 as c1, d5037 as c2 } from '../descriptors/data/230.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d5037 as d5037 } from '../descriptors/data/230.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5037;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutRecoveryEmailSettings"]:c0(),["CheckoutSavedPaymentDetailsSettings"]:c1(),["CheckoutSettings"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCheckoutSettings(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
