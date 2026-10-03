import { d55 as c0, d778 as c1, d907 as c2, d1749 as c3, d1786 as c4, d1785 as c5, d1790 as c6, d1791 as c7, d1792 as c8, d1805 as c9, d70 as c10, d1746 as c11, d1747 as c12, d1748 as c13, d2480 as c14 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d1805 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1805;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Banner"]:c0(),["ExpandedOrganizationSummary"]:c1(),["Image"]:c2(),["Merchant"]:c3(),["NextAction"]:c4(),["NextActionMerchantAccountSession"]:c5(),["OnboardingLaunchRecommendedPolicy"]:c6(),["OnboardingLaunchReference"]:c7(),["OnboardingNextStep"]:c8(),["OnboardingVerifyEmailResult"]:c9(),["PostalAddress"]:c10(),["SharedCodec475"]:c11(),["SharedCodec476"]:c12(),["SharedCodec477"]:c13(),["User"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOnboardingVerifyEmailResult(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
