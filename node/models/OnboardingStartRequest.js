import { d797 as c0 } from '../descriptors/data/34.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d797 as d797 } from '../descriptors/data/34.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d797;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OnboardingStartRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOnboardingStartRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
