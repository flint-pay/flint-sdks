import { d1782 as c0, d2346 as c1, d2347 as c2, d2348 as c3 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d1782 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1782;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MeFlintWalletStoreSetup"]:c0(),["StripeClientAuthority"]:c1(),["StripeClientSetup"]:c2(),["StripeClientSetupStripe"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeMeFlintWalletStoreSetup(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
