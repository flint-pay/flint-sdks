import { d1788 as c0, d1787 as c1, d1790 as c2, d1786 as c3, d1785 as c4, d1794 as c5, d1795 as c6, d1793 as c7, d1833 as c8, d1832 as c9, d1831 as c10 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d1788 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1788;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantAccountSession"]:c0(),["MerchantAccountSessionClientSession"]:c1(),["MerchantAccountSessionEffectivePolicy"]:c2(),["MerchantAccountSessionStripe"]:c3(),["MerchantAccountSessionStripeAccountSession"]:c4(),["MerchantAccountSessionStripeCollectionOptions"]:c5(),["MerchantAccountSessionStripeComponent"]:c6(),["MerchantAccountSessionStripeRequirements"]:c7(),["OnboardingRequirements"]:c8(),["SharedCodec489"]:c9(),["SharedCodec490"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeMerchantAccountSession(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
