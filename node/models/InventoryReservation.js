import { d1584 as c0, d1620 as c1, d1622 as c2, d1627 as c3, d2165 as c4 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1620 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1620;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryActionRequired"]:c0(),["InventoryReservation"]:c1(),["InventoryReservationOwner"]:c2(),["InventoryRoutingSource"]:c3(),["ReservationLine"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryReservation(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
