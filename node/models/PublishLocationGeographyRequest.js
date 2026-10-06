import { d200 as c0, d1768 as c1, d2096 as c2 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d2096 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2096;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LocationAddress"]:c0(),["LocationCoordinate"]:c1(),["PublishLocationGeographyRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePublishLocationGeographyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
