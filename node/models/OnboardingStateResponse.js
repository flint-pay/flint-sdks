import { d323 as c0, d1823 as c1, d1824 as c2, d1827 as c3, d1828 as c4, d1829 as c5, d1830 as c6, d1834 as c7, d1838 as c8, d1839 as c9, d2178 as c10, d2179 as c11, d14 as c12, d1822 as c13, d1825 as c14, d1833 as c15, d1832 as c16 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d1839 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1839;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["OnboardingLaunchRecommendedPolicy"]:c3(),["OnboardingLaunchReference"]:c4(),["OnboardingNextStep"]:c5(),["OnboardingProfile"]:c6(),["OnboardingRequirements"]:c7(),["OnboardingState"]:c8(),["OnboardingStateResponse"]:c9(),["ResponseMeta"]:c10(),["ResponseWarning"]:c11(),["SharedCodec1"]:c12(),["SharedCodec467"]:c13(),["SharedCodec468"]:c14(),["SharedCodec469"]:c15(),["SharedCodec470"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOnboardingStateResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
