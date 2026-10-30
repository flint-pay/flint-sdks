import { d5992 as c0 } from '../descriptors/data/276.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5992 as d5992 } from '../descriptors/data/276.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5992;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OnboardingProfileRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOnboardingProfileRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
