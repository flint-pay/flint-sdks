import { d54 as c0, d775 as c1, d894 as c2, d1785 as c3, d1800 as c4, d1801 as c5, d1823 as c6, d1824 as c7, d1827 as c8, d1828 as c9, d1829 as c10, d1842 as c11, d66 as c12, d14 as c13, d1784 as c14, d1822 as c15, d2576 as c16 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d1842 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1842;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Banner"]:c0(),["ExpandedOrganizationSummary"]:c1(),["Image"]:c2(),["Merchant"]:c3(),["MerchantReadinessAxis"]:c4(),["MerchantReadinessRequirements"]:c5(),["NextAction"]:c6(),["NextActionMerchantAccountSession"]:c7(),["OnboardingLaunchRecommendedPolicy"]:c8(),["OnboardingLaunchReference"]:c9(),["OnboardingNextStep"]:c10(),["OnboardingVerifyEmailResult"]:c11(),["PostalAddress"]:c12(),["SharedCodec1"]:c13(),["SharedCodec465"]:c14(),["SharedCodec467"]:c15(),["User"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOnboardingVerifyEmailResult(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
