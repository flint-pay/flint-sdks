import { d1596 as c0, d1632 as c1, d1634 as c2, d110 as c3, d2145 as c4 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d1632 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1632;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryActionRequired"]:c0(),["InventoryReservation"]:c1(),["InventoryReservationOwner"]:c2(),["InventoryRoutingSource"]:c3(),["ReservationLine"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryReservation(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
