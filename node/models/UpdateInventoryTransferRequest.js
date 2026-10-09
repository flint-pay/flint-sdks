import { d2481 as c0, d2480 as c1, d2477 as c2, d2478 as c3, d2479 as c4, d2482 as c5 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d2482 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2482;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec622"]:c0(),["SharedCodec623"]:c1(),["SharedCodec624"]:c2(),["SharedCodec625"]:c3(),["SharedCodec626"]:c4(),["UpdateInventoryTransferRequest"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateInventoryTransferRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
