import { d1008 as c0 } from '../descriptors/data/50.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7681 as c1, d7685 as c2 } from '../descriptors/data/370.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d1008 as d1008 } from '../descriptors/data/50.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1008;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OnboardingAdvanceRequest"]:c0(),["OnboardingProfileRequest"]:c1(),["SharedCodec1063"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOnboardingAdvanceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
