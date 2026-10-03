import { d1748 as c0, d1750 as c1, d1753 as c2, d1754 as c3, d1755 as c4, d1756 as c5, d1757 as c6, d1787 as c7, d1795 as c8, d1794 as c9, d1793 as c10 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d1748 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1748;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantAccountSession"]:c0(),["MerchantAccountSessionEffectivePolicy"]:c1(),["MerchantAccountSessionStripeCollectionOptions"]:c2(),["MerchantAccountSessionStripeComponentLaunch"]:c3(),["MerchantAccountSessionStripeComponentProps"]:c4(),["MerchantAccountSessionStripeLaunch"]:c5(),["MerchantAccountSessionStripeRequirements"]:c6(),["OnboardingExternalAction"]:c7(),["OnboardingRequirements"]:c8(),["SharedCodec480"]:c9(),["SharedCodec481"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeMerchantAccountSession(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
