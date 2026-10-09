import { d323 as c0, d336 as c1, d2419 as c2, d2420 as c3, d2421 as c4 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d2421 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2421;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["SharedCodec104"]:c1(),["SharedCodec597"]:c2(),["SharedCodec598"]:c3(),["TippingSettings"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeTippingSettings(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
