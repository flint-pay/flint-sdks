import { d41 as c0, d2342 as c1, d2343 as c2, d2344 as c3, d2345 as c4 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d2345 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2345;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec6"]:c0(),["SharedCodec615"]:c1(),["SharedCodec616"]:c2(),["SharedCodec617"]:c3(),["TaxBreakdown"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeTaxBreakdown(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
