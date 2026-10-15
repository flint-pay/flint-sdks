import { d22 as c0, d26 as c1, d27 as c2, d24 as c3, d28 as c4, d20 as c5 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d22 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d22;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["APIRequestLogDetail"]:c0(),["APIRequestLogQueryParam"]:c1(),["APIRequestLogReproduction"]:c2(),["ApiRequestLogExpansionShape"]:c3(),["ApiRequestLogResponseShapeMetadata"]:c4(),["SharedCodec2"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeAPIRequestLogDetail(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
