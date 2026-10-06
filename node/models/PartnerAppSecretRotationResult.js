import { d1941 as c0 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d1941 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1941;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerAppSecretRotationResult"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePartnerAppSecretRotationResult(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
