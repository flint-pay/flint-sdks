import { d55 as c0, d776 as c1, d905 as c2, d1747 as c3, d74 as c4, d1784 as c5, d1783 as c6, d1788 as c7, d1789 as c8, d1790 as c9, d1802 as c10, d1803 as c11, d70 as c12, d2118 as c13, d2119 as c14, d1744 as c15, d1745 as c16, d1746 as c17, d2477 as c18 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d1802 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1802;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Banner"]:c0(),["ExpandedOrganizationSummary"]:c1(),["Image"]:c2(),["Merchant"]:c3(),["MoneyValue"]:c4(),["NextAction"]:c5(),["NextActionMerchantAccountSession"]:c6(),["OnboardingLaunchRecommendedPolicy"]:c7(),["OnboardingLaunchReference"]:c8(),["OnboardingNextStep"]:c9(),["OnboardingVerifyEmailResponse"]:c10(),["OnboardingVerifyEmailResult"]:c11(),["PostalAddress"]:c12(),["ResponseMeta"]:c13(),["ResponseWarning"]:c14(),["SharedCodec475"]:c15(),["SharedCodec476"]:c16(),["SharedCodec477"]:c17(),["User"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOnboardingVerifyEmailResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
