import { d54 as c0, d765 as c1, d889 as c2, d1782 as c3, d1797 as c4, d1798 as c5, d1820 as c6, d1821 as c7, d1824 as c8, d1825 as c9, d1826 as c10, d1839 as c11, d66 as c12, d14 as c13, d1781 as c14, d1819 as c15, d2560 as c16 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d1839 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1839;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Banner"]:c0(),["ExpandedOrganizationSummary"]:c1(),["Image"]:c2(),["Merchant"]:c3(),["MerchantReadinessAxis"]:c4(),["MerchantReadinessRequirements"]:c5(),["NextAction"]:c6(),["NextActionMerchantAccountSession"]:c7(),["OnboardingLaunchRecommendedPolicy"]:c8(),["OnboardingLaunchReference"]:c9(),["OnboardingNextStep"]:c10(),["OnboardingVerifyEmailResult"]:c11(),["PostalAddress"]:c12(),["SharedCodec1"]:c13(),["SharedCodec464"]:c14(),["SharedCodec466"]:c15(),["User"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOnboardingVerifyEmailResult(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
