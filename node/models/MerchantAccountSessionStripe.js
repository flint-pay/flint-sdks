import { d1792 as c0, d1793 as c1, d1794 as c2, d1795 as c3, d1796 as c4 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d1792 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1792;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantAccountSessionStripe"]:c0(),["MerchantAccountSessionStripeAccountSession"]:c1(),["MerchantAccountSessionStripeCollectionOptions"]:c2(),["MerchantAccountSessionStripeComponent"]:c3(),["MerchantAccountSessionStripeRequirements"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeMerchantAccountSessionStripe(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
