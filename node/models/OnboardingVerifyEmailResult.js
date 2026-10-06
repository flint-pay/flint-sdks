import { d58 as c0, d796 as c1, d926 as c2, d1784 as c3, d1823 as c4, d1822 as c5, d1826 as c6, d1827 as c7, d1828 as c8, d1841 as c9, d73 as c10, d14 as c11, d1781 as c12, d1782 as c13, d1783 as c14, d1821 as c15, d2518 as c16 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d1841 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1841;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Banner"]:c0(),["ExpandedOrganizationSummary"]:c1(),["Image"]:c2(),["Merchant"]:c3(),["NextAction"]:c4(),["NextActionMerchantAccountSession"]:c5(),["OnboardingLaunchRecommendedPolicy"]:c6(),["OnboardingLaunchReference"]:c7(),["OnboardingNextStep"]:c8(),["OnboardingVerifyEmailResult"]:c9(),["PostalAddress"]:c10(),["SharedCodec1"]:c11(),["SharedCodec483"]:c12(),["SharedCodec484"]:c13(),["SharedCodec485"]:c14(),["SharedCodec487"]:c15(),["User"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOnboardingVerifyEmailResult(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
