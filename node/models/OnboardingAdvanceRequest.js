import { d1009 as c0 } from '../descriptors/data/50.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7680 as c1, d7684 as c2 } from '../descriptors/data/367.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d1009 as d1009 } from '../descriptors/data/50.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1009;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OnboardingAdvanceRequest"]:c0(),["OnboardingProfileRequest"]:c1(),["SharedCodec1061"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOnboardingAdvanceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
