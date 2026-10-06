import { d1800 as c0, d1801 as c1, d1802 as c2, d1803 as c3, d1807 as c4, d1811 as c5, d1798 as c6, d1806 as c7, d1805 as c8 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1811 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1811;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OnboardingLaunchRecommendedPolicy"]:c0(),["OnboardingLaunchReference"]:c1(),["OnboardingNextStep"]:c2(),["OnboardingProfile"]:c3(),["OnboardingRequirements"]:c4(),["OnboardingState"]:c5(),["SharedCodec486"]:c6(),["SharedCodec487"]:c7(),["SharedCodec488"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOnboardingState(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
