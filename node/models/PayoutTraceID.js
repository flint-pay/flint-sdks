import { d2001 as c0 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d2001 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2001;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PayoutTraceID"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayoutTraceID(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
