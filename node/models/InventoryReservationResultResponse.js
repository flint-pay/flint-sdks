import { d1537 as c0, d1556 as c1, d1560 as c2, d1573 as c3, d1575 as c4, d1577 as c5, d1578 as c6, d1580 as c7, d314 as c8, d1775 as c9, d1776 as c10, d2099 as c11, d2112 as c12, d2113 as c13, d14 as c14, d1774 as c15 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d1578 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1578;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryActionRequired"]:c0(),["InventoryItem"]:c1(),["InventoryLevel"]:c2(),["InventoryReservation"]:c3(),["InventoryReservationOwner"]:c4(),["InventoryReservationResult"]:c5(),["InventoryReservationResultResponse"]:c6(),["InventoryRoutingSource"]:c7(),["MoneyValue"]:c8(),["NextAction"]:c9(),["NextActionMerchantAccountSession"]:c10(),["ReservationLine"]:c11(),["ResponseMeta"]:c12(),["ResponseWarning"]:c13(),["SharedCodec1"]:c14(),["SharedCodec448"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryReservationResultResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
