import { d1794 as c0, d1795 as c1, d1796 as c2 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1795 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1795;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantAccountSessionStripeCollectionOptions"]:c0(),["MerchantAccountSessionStripeComponent"]:c1(),["MerchantAccountSessionStripeRequirements"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeMerchantAccountSessionStripeComponent(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
