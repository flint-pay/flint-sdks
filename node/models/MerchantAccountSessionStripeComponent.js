import { d1791 as c0, d1792 as c1, d1793 as c2 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d1792 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1792;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantAccountSessionStripeCollectionOptions"]:c0(),["MerchantAccountSessionStripeComponent"]:c1(),["MerchantAccountSessionStripeRequirements"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeMerchantAccountSessionStripeComponent(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
