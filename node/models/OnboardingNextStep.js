import { d1826 as c0, d1827 as c1, d1828 as c2 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d1828 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1828;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OnboardingLaunchRecommendedPolicy"]:c0(),["OnboardingLaunchReference"]:c1(),["OnboardingNextStep"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOnboardingNextStep(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
