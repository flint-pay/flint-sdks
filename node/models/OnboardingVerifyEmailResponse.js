import { d54 as c0, d775 as c1, d894 as c2, d1785 as c3, d1800 as c4, d1801 as c5, d323 as c6, d1823 as c7, d1824 as c8, d1827 as c9, d1828 as c10, d1829 as c11, d1841 as c12, d1842 as c13, d66 as c14, d2178 as c15, d2179 as c16, d14 as c17, d1784 as c18, d1822 as c19, d2576 as c20 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d1841 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1841;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Banner"]:c0(),["ExpandedOrganizationSummary"]:c1(),["Image"]:c2(),["Merchant"]:c3(),["MerchantReadinessAxis"]:c4(),["MerchantReadinessRequirements"]:c5(),["MoneyValue"]:c6(),["NextAction"]:c7(),["NextActionMerchantAccountSession"]:c8(),["OnboardingLaunchRecommendedPolicy"]:c9(),["OnboardingLaunchReference"]:c10(),["OnboardingNextStep"]:c11(),["OnboardingVerifyEmailResponse"]:c12(),["OnboardingVerifyEmailResult"]:c13(),["PostalAddress"]:c14(),["ResponseMeta"]:c15(),["ResponseWarning"]:c16(),["SharedCodec1"]:c17(),["SharedCodec465"]:c18(),["SharedCodec467"]:c19(),["User"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOnboardingVerifyEmailResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
