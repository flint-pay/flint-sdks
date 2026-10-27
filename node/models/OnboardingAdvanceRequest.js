import { d796 as c0 } from '../descriptors/data/34.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4509 as c1 } from '../descriptors/data/198.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4520 as c2 } from '../descriptors/data/199.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d796 as d796 } from '../descriptors/data/34.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d796;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OnboardingAdvanceRequest"]:c0(),["OnboardingProfileRequest"]:c1(),["SharedCodec969"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOnboardingAdvanceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
