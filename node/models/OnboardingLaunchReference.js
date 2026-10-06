import { d1800 as c0, d1801 as c1 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1801 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1801;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OnboardingLaunchRecommendedPolicy"]:c0(),["OnboardingLaunchReference"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOnboardingLaunchReference(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
