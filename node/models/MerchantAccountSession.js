import { d1783 as c0, d1784 as c1, d1786 as c2, d1789 as c3, d1790 as c4, d1791 as c5, d1792 as c6, d1793 as c7, d1831 as c8, d1830 as c9, d1829 as c10 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d1783 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1783;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantAccountSession"]:c0(),["MerchantAccountSessionClientSession"]:c1(),["MerchantAccountSessionEffectivePolicy"]:c2(),["MerchantAccountSessionStripe"]:c3(),["MerchantAccountSessionStripeAccountSession"]:c4(),["MerchantAccountSessionStripeCollectionOptions"]:c5(),["MerchantAccountSessionStripeComponent"]:c6(),["MerchantAccountSessionStripeRequirements"]:c7(),["OnboardingRequirements"]:c8(),["SharedCodec468"]:c9(),["SharedCodec469"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeMerchantAccountSession(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
