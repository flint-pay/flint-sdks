import { d226 as c0, d1621 as c1, d1632 as c2, d225 as c3, d224 as c4 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d226 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d226;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ConsumeInventoryReservationRequest"]:c0(),["InventoryReservationProvenance"]:c1(),["InventorySourceSystemRequest"]:c2(),["SharedCodec40"]:c3(),["SharedCodec41"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeConsumeInventoryReservationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
