import { d1750 as c0, d1752 as c1, d1755 as c2, d1756 as c3, d1757 as c4, d1758 as c5, d1759 as c6, d1789 as c7, d1797 as c8, d1796 as c9, d1795 as c10 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d1750 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1750;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantAccountSession"]:c0(),["MerchantAccountSessionEffectivePolicy"]:c1(),["MerchantAccountSessionStripeCollectionOptions"]:c2(),["MerchantAccountSessionStripeComponentLaunch"]:c3(),["MerchantAccountSessionStripeComponentProps"]:c4(),["MerchantAccountSessionStripeLaunch"]:c5(),["MerchantAccountSessionStripeRequirements"]:c6(),["OnboardingExternalAction"]:c7(),["OnboardingRequirements"]:c8(),["SharedCodec480"]:c9(),["SharedCodec481"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeMerchantAccountSession(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
