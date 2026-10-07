import { d1738 as c0, d1739 as c1, d1741 as c2, d1744 as c3, d1745 as c4, d1746 as c5, d1747 as c6, d1748 as c7, d1786 as c8, d1785 as c9, d1784 as c10 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d1738 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1738;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantAccountSession"]:c0(),["MerchantAccountSessionClientSession"]:c1(),["MerchantAccountSessionEffectivePolicy"]:c2(),["MerchantAccountSessionStripe"]:c3(),["MerchantAccountSessionStripeAccountSession"]:c4(),["MerchantAccountSessionStripeCollectionOptions"]:c5(),["MerchantAccountSessionStripeComponent"]:c6(),["MerchantAccountSessionStripeRequirements"]:c7(),["OnboardingRequirements"]:c8(),["SharedCodec450"]:c9(),["SharedCodec451"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeMerchantAccountSession(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
