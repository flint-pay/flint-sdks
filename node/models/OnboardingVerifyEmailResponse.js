import { d55 as c0, d778 as c1, d907 as c2, d1749 as c3, d74 as c4, d1786 as c5, d1785 as c6, d1790 as c7, d1791 as c8, d1792 as c9, d1804 as c10, d1805 as c11, d70 as c12, d2121 as c13, d2122 as c14, d1746 as c15, d1747 as c16, d1748 as c17, d2480 as c18 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d1804 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1804;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Banner"]:c0(),["ExpandedOrganizationSummary"]:c1(),["Image"]:c2(),["Merchant"]:c3(),["MoneyValue"]:c4(),["NextAction"]:c5(),["NextActionMerchantAccountSession"]:c6(),["OnboardingLaunchRecommendedPolicy"]:c7(),["OnboardingLaunchReference"]:c8(),["OnboardingNextStep"]:c9(),["OnboardingVerifyEmailResponse"]:c10(),["OnboardingVerifyEmailResult"]:c11(),["PostalAddress"]:c12(),["ResponseMeta"]:c13(),["ResponseWarning"]:c14(),["SharedCodec475"]:c15(),["SharedCodec476"]:c16(),["SharedCodec477"]:c17(),["User"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOnboardingVerifyEmailResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
