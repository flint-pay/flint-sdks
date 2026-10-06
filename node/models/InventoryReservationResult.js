import { d1595 as c0, d1614 as c1, d1618 as c2, d1631 as c3, d1633 as c4, d1634 as c5, d110 as c6, d2144 as c7 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d1634 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1634;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryActionRequired"]:c0(),["InventoryItem"]:c1(),["InventoryLevel"]:c2(),["InventoryReservation"]:c3(),["InventoryReservationOwner"]:c4(),["InventoryReservationResult"]:c5(),["InventoryRoutingSource"]:c6(),["ReservationLine"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryReservationResult(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
