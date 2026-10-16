import { d1787 as c0, d1792 as c1, d1793 as c2, d1794 as c3, d1795 as c4, d1796 as c5 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d1787 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1787;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantAccountSessionClientSession"]:c0(),["MerchantAccountSessionStripe"]:c1(),["MerchantAccountSessionStripeAccountSession"]:c2(),["MerchantAccountSessionStripeCollectionOptions"]:c3(),["MerchantAccountSessionStripeComponent"]:c4(),["MerchantAccountSessionStripeRequirements"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeMerchantAccountSessionClientSession(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
