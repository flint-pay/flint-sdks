import { d54 as c0, d765 as c1, d889 as c2, d1782 as c3, d1797 as c4, d1798 as c5, d323 as c6, d1820 as c7, d1821 as c8, d1824 as c9, d1825 as c10, d1826 as c11, d1838 as c12, d1839 as c13, d66 as c14, d2162 as c15, d2163 as c16, d14 as c17, d1781 as c18, d1819 as c19, d2560 as c20 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d1838 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1838;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Banner"]:c0(),["ExpandedOrganizationSummary"]:c1(),["Image"]:c2(),["Merchant"]:c3(),["MerchantReadinessAxis"]:c4(),["MerchantReadinessRequirements"]:c5(),["MoneyValue"]:c6(),["NextAction"]:c7(),["NextActionMerchantAccountSession"]:c8(),["OnboardingLaunchRecommendedPolicy"]:c9(),["OnboardingLaunchReference"]:c10(),["OnboardingNextStep"]:c11(),["OnboardingVerifyEmailResponse"]:c12(),["OnboardingVerifyEmailResult"]:c13(),["PostalAddress"]:c14(),["ResponseMeta"]:c15(),["ResponseWarning"]:c16(),["SharedCodec1"]:c17(),["SharedCodec464"]:c18(),["SharedCodec466"]:c19(),["User"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOnboardingVerifyEmailResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
