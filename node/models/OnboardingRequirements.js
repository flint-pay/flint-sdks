import { d1833 as c0, d1832 as c1, d1831 as c2 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d1833 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1833;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OnboardingRequirements"]:c0(),["SharedCodec489"]:c1(),["SharedCodec490"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOnboardingRequirements(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
