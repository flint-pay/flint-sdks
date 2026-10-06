import { d1786 as c0, d1785 as c1, d1794 as c2, d1795 as c3, d1793 as c4 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d1786 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1786;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantAccountSessionStripe"]:c0(),["MerchantAccountSessionStripeAccountSession"]:c1(),["MerchantAccountSessionStripeCollectionOptions"]:c2(),["MerchantAccountSessionStripeComponent"]:c3(),["MerchantAccountSessionStripeRequirements"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeMerchantAccountSessionStripe(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
