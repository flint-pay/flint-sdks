import { d1786 as c0, d1787 as c1, d1789 as c2, d1792 as c3, d1793 as c4, d1794 as c5, d1795 as c6, d1796 as c7, d1834 as c8, d1833 as c9, d1832 as c10 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1786 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1786;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantAccountSession"]:c0(),["MerchantAccountSessionClientSession"]:c1(),["MerchantAccountSessionEffectivePolicy"]:c2(),["MerchantAccountSessionStripe"]:c3(),["MerchantAccountSessionStripeAccountSession"]:c4(),["MerchantAccountSessionStripeCollectionOptions"]:c5(),["MerchantAccountSessionStripeComponent"]:c6(),["MerchantAccountSessionStripeRequirements"]:c7(),["OnboardingRequirements"]:c8(),["SharedCodec469"]:c9(),["SharedCodec470"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeMerchantAccountSession(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
