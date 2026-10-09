import { d371 as c0, d370 as c1, d369 as c2, d2415 as c3 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d371 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d371;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderLineItemModifierRequest"]:c0(),["SharedCodec116"]:c1(),["SharedCodec117"]:c2(),["TextModifierRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderLineItemModifierRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
