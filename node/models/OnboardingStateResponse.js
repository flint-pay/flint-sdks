import { d74 as c0, d1784 as c1, d1783 as c2, d1788 as c3, d1789 as c4, d1790 as c5, d1791 as c6, d1795 as c7, d1799 as c8, d1800 as c9, d2118 as c10, d2119 as c11, d1785 as c12, d1794 as c13, d1793 as c14 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d1800 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1800;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["OnboardingLaunchRecommendedPolicy"]:c3(),["OnboardingLaunchReference"]:c4(),["OnboardingNextStep"]:c5(),["OnboardingProfile"]:c6(),["OnboardingRequirements"]:c7(),["OnboardingState"]:c8(),["OnboardingStateResponse"]:c9(),["ResponseMeta"]:c10(),["ResponseWarning"]:c11(),["SharedCodec479"]:c12(),["SharedCodec480"]:c13(),["SharedCodec481"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOnboardingStateResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
