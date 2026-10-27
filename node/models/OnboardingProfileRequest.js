import { d4509 as c0 } from '../descriptors/data/198.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4509 as d4509 } from '../descriptors/data/198.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4509;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OnboardingProfileRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOnboardingProfileRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
