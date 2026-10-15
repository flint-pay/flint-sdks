import { d1834 as c0, d1833 as c1, d1832 as c2 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1834 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1834;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OnboardingRequirements"]:c0(),["SharedCodec469"]:c1(),["SharedCodec470"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOnboardingRequirements(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
