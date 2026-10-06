import { d42 as c0, d77 as c1, d40 as c2, d41 as c3, d223 as c4 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d42 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d42;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Balance"]:c0(),["MoneyValue"]:c1(),["SharedCodec5"]:c2(),["SharedCodec6"]:c3(),["SignedMoney"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBalance(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
