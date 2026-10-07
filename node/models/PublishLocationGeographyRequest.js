import { d200 as c0, d1769 as c1, d2097 as c2 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d2097 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2097;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LocationAddress"]:c0(),["LocationCoordinate"]:c1(),["PublishLocationGeographyRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePublishLocationGeographyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
