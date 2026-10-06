import { d1817 as c0, d1816 as c1, d223 as c2 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1817 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1817;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderActivity"]:c0(),["SharedCodec489"]:c1(),["SignedMoney"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderActivity(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
