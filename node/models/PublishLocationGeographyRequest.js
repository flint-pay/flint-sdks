import { d1771 as c0, d1772 as c1, d2116 as c2 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d2116 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2116;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LocationAddress"]:c0(),["LocationCoordinate"]:c1(),["PublishLocationGeographyRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePublishLocationGeographyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
