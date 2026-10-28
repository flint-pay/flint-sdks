import { d5346 as c0, d5347 as c1, d5348 as c2 } from '../descriptors/data/252.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5348 as d5348 } from '../descriptors/data/252.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5348;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutRecoveryEmailSettingsRequestRequest"]:c0(),["CheckoutSavedPaymentDetailsSettingsRequestRequest"]:c1(),["CheckoutSettingsRequestRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCheckoutSettingsRequestRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
