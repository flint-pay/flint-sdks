import { d1784 as c0, d1789 as c1, d1790 as c2, d1791 as c3, d1792 as c4, d1793 as c5 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d1784 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1784;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantAccountSessionClientSession"]:c0(),["MerchantAccountSessionStripe"]:c1(),["MerchantAccountSessionStripeAccountSession"]:c2(),["MerchantAccountSessionStripeCollectionOptions"]:c3(),["MerchantAccountSessionStripeComponent"]:c4(),["MerchantAccountSessionStripeRequirements"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeMerchantAccountSessionClientSession(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
