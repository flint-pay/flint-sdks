import { d58 as c0, d796 as c1, d926 as c2, d1785 as c3, d77 as c4, d1824 as c5, d1823 as c6, d1827 as c7, d1828 as c8, d1829 as c9, d1841 as c10, d1842 as c11, d73 as c12, d2158 as c13, d2159 as c14, d14 as c15, d1782 as c16, d1783 as c17, d1784 as c18, d1822 as c19, d2519 as c20 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d1841 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1841;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Banner"]:c0(),["ExpandedOrganizationSummary"]:c1(),["Image"]:c2(),["Merchant"]:c3(),["MoneyValue"]:c4(),["NextAction"]:c5(),["NextActionMerchantAccountSession"]:c6(),["OnboardingLaunchRecommendedPolicy"]:c7(),["OnboardingLaunchReference"]:c8(),["OnboardingNextStep"]:c9(),["OnboardingVerifyEmailResponse"]:c10(),["OnboardingVerifyEmailResult"]:c11(),["PostalAddress"]:c12(),["ResponseMeta"]:c13(),["ResponseWarning"]:c14(),["SharedCodec1"]:c15(),["SharedCodec484"]:c16(),["SharedCodec485"]:c17(),["SharedCodec486"]:c18(),["SharedCodec488"]:c19(),["User"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOnboardingVerifyEmailResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
