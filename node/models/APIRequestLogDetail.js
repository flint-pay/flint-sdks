import { d22 as c0, d26 as c1, d27 as c2, d24 as c3, d28 as c4, d20 as c5 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d22 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d22;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["APIRequestLogDetail"]:c0(),["APIRequestLogQueryParam"]:c1(),["APIRequestLogReproduction"]:c2(),["ApiRequestLogExpansionShape"]:c3(),["ApiRequestLogResponseShapeMetadata"]:c4(),["SharedCodec2"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeAPIRequestLogDetail(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
