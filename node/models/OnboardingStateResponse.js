import { d77 as c0, d1797 as c1, d1796 as c2, d1800 as c3, d1801 as c4, d1802 as c5, d1803 as c6, d1807 as c7, d1811 as c8, d1812 as c9, d2131 as c10, d2132 as c11, d14 as c12, d1795 as c13, d1798 as c14, d1806 as c15, d1805 as c16 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1812 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1812;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["OnboardingLaunchRecommendedPolicy"]:c3(),["OnboardingLaunchReference"]:c4(),["OnboardingNextStep"]:c5(),["OnboardingProfile"]:c6(),["OnboardingRequirements"]:c7(),["OnboardingState"]:c8(),["OnboardingStateResponse"]:c9(),["ResponseMeta"]:c10(),["ResponseWarning"]:c11(),["SharedCodec1"]:c12(),["SharedCodec485"]:c13(),["SharedCodec486"]:c14(),["SharedCodec487"]:c15(),["SharedCodec488"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOnboardingStateResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
