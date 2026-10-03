import { d1748 as c0, d1750 as c1, d1752 as c2, d1753 as c3, d1754 as c4, d1755 as c5, d1756 as c6, d1757 as c7, d74 as c8, d1784 as c9, d1783 as c10, d1787 as c11, d1795 as c12, d2118 as c13, d2119 as c14, d1794 as c15, d1793 as c16 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d1752 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1752;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantAccountSession"]:c0(),["MerchantAccountSessionEffectivePolicy"]:c1(),["MerchantAccountSessionResponse"]:c2(),["MerchantAccountSessionStripeCollectionOptions"]:c3(),["MerchantAccountSessionStripeComponentLaunch"]:c4(),["MerchantAccountSessionStripeComponentProps"]:c5(),["MerchantAccountSessionStripeLaunch"]:c6(),["MerchantAccountSessionStripeRequirements"]:c7(),["MoneyValue"]:c8(),["NextAction"]:c9(),["NextActionMerchantAccountSession"]:c10(),["OnboardingExternalAction"]:c11(),["OnboardingRequirements"]:c12(),["ResponseMeta"]:c13(),["ResponseWarning"]:c14(),["SharedCodec480"]:c15(),["SharedCodec481"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeMerchantAccountSessionResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
