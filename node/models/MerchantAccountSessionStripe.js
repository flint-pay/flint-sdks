import { d1760 as c0, d1759 as c1, d1768 as c2, d1769 as c3, d1767 as c4 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1760 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1760;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantAccountSessionStripe"]:c0(),["MerchantAccountSessionStripeAccountSession"]:c1(),["MerchantAccountSessionStripeCollectionOptions"]:c2(),["MerchantAccountSessionStripeComponent"]:c3(),["MerchantAccountSessionStripeRequirements"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeMerchantAccountSessionStripe(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
