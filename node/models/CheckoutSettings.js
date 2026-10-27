import { d5064 as c0, d5065 as c1, d5066 as c2 } from '../descriptors/data/232.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d5066 as d5066 } from '../descriptors/data/232.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5066;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutRecoveryEmailSettings"]:c0(),["CheckoutSavedPaymentDetailsSettings"]:c1(),["CheckoutSettings"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCheckoutSettings(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
