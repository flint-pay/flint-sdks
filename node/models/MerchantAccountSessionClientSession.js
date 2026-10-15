import { d1787 as c0, d1792 as c1, d1793 as c2, d1794 as c3, d1795 as c4, d1796 as c5 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1787 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1787;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantAccountSessionClientSession"]:c0(),["MerchantAccountSessionStripe"]:c1(),["MerchantAccountSessionStripeAccountSession"]:c2(),["MerchantAccountSessionStripeCollectionOptions"]:c3(),["MerchantAccountSessionStripeComponent"]:c4(),["MerchantAccountSessionStripeRequirements"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeMerchantAccountSessionClientSession(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
