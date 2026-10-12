import { d1824 as c0, d1825 as c1, d1826 as c2, d1827 as c3, d1831 as c4, d1835 as c5, d1822 as c6, d1830 as c7, d1829 as c8 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { d1835 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1835;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OnboardingLaunchRecommendedPolicy"]:c0(),["OnboardingLaunchReference"]:c1(),["OnboardingNextStep"]:c2(),["OnboardingProfile"]:c3(),["OnboardingRequirements"]:c4(),["OnboardingState"]:c5(),["SharedCodec467"]:c6(),["SharedCodec468"]:c7(),["SharedCodec469"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOnboardingState(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
