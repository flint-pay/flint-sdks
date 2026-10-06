import { d1595 as c0, d1631 as c1, d1633 as c2, d110 as c3, d2144 as c4 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d1631 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1631;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryActionRequired"]:c0(),["InventoryReservation"]:c1(),["InventoryReservationOwner"]:c2(),["InventoryRoutingSource"]:c3(),["ReservationLine"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryReservation(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
