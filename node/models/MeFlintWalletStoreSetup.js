import { d1779 as c0, d2326 as c1, d2327 as c2, d2328 as c3 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d1779 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1779;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MeFlintWalletStoreSetup"]:c0(),["StripeClientAuthority"]:c1(),["StripeClientSetup"]:c2(),["StripeClientSetupStripe"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeMeFlintWalletStoreSetup(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
