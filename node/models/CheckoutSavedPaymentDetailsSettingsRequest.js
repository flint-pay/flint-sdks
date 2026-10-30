import { d6797 as c0 } from '../descriptors/data/323.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6797 as d6797 } from '../descriptors/data/323.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6797;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutSavedPaymentDetailsSettingsRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCheckoutSavedPaymentDetailsSettingsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
