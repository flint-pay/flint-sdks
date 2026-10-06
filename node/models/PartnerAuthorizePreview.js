import { d1943 as c0, d1944 as c1 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d1943 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1943;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerAuthorizePreview"]:c0(),["PartnerAuthorizePreviewPermission"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePartnerAuthorizePreview(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
