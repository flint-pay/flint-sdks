import { d1750 as c0, d1752 as c1, d1754 as c2, d1755 as c3, d1756 as c4, d1757 as c5, d1758 as c6, d1759 as c7, d74 as c8, d1786 as c9, d1785 as c10, d1789 as c11, d1797 as c12, d2121 as c13, d2122 as c14, d1796 as c15, d1795 as c16 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d1754 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1754;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantAccountSession"]:c0(),["MerchantAccountSessionEffectivePolicy"]:c1(),["MerchantAccountSessionResponse"]:c2(),["MerchantAccountSessionStripeCollectionOptions"]:c3(),["MerchantAccountSessionStripeComponentLaunch"]:c4(),["MerchantAccountSessionStripeComponentProps"]:c5(),["MerchantAccountSessionStripeLaunch"]:c6(),["MerchantAccountSessionStripeRequirements"]:c7(),["MoneyValue"]:c8(),["NextAction"]:c9(),["NextActionMerchantAccountSession"]:c10(),["OnboardingExternalAction"]:c11(),["OnboardingRequirements"]:c12(),["ResponseMeta"]:c13(),["ResponseWarning"]:c14(),["SharedCodec480"]:c15(),["SharedCodec481"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeMerchantAccountSessionResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
