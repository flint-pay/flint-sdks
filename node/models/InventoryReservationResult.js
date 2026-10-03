import { d1564 as c0, d1583 as c1, d1587 as c2, d1600 as c3, d1602 as c4, d1603 as c5, d106 as c6, d2106 as c7 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d1603 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1603;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryActionRequired"]:c0(),["InventoryItem"]:c1(),["InventoryLevel"]:c2(),["InventoryReservation"]:c3(),["InventoryReservationOwner"]:c4(),["InventoryReservationResult"]:c5(),["InventoryRoutingSource"]:c6(),["ReservationLine"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryReservationResult(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
