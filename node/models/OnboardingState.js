import { d1788 as c0, d1789 as c1, d1790 as c2, d1791 as c3, d1795 as c4, d1799 as c5, d1785 as c6, d1794 as c7, d1793 as c8 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d1799 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1799;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OnboardingLaunchRecommendedPolicy"]:c0(),["OnboardingLaunchReference"]:c1(),["OnboardingNextStep"]:c2(),["OnboardingProfile"]:c3(),["OnboardingRequirements"]:c4(),["OnboardingState"]:c5(),["SharedCodec479"]:c6(),["SharedCodec480"]:c7(),["SharedCodec481"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOnboardingState(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
