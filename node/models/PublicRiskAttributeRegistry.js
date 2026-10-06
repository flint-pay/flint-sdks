import { d2092 as c0, d2093 as c1 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d2093 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2093;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PublicRiskAttribute"]:c0(),["PublicRiskAttributeRegistry"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePublicRiskAttributeRegistry(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
