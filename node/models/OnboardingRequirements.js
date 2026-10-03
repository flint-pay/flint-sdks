import { d1795 as c0, d1794 as c1, d1793 as c2 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d1795 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1795;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OnboardingRequirements"]:c0(),["SharedCodec480"]:c1(),["SharedCodec481"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOnboardingRequirements(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
