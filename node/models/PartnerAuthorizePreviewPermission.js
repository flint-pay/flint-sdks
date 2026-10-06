import { d1944 as c0 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d1944 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1944;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerAuthorizePreviewPermission"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePartnerAuthorizePreviewPermission(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
