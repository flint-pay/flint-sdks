import { d2113 as c0, d1520 as c1, d1522 as c2, d1521 as c3, d1523 as c4, d1524 as c5 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d2113 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2113;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Report"]:c0(),["SharedCodec409"]:c1(),["SharedCodec410"]:c2(),["SharedCodec411"]:c3(),["SharedCodec412"]:c4(),["SharedCodec413"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReport(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
