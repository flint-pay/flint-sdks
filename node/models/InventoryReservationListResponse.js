import { d1537 as c0, d1573 as c1, d1574 as c2, d1575 as c3, d1580 as c4, d314 as c5, d1775 as c6, d1776 as c7, d2099 as c8, d2112 as c9, d2113 as c10, d14 as c11, d1774 as c12 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d1574 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1574;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryActionRequired"]:c0(),["InventoryReservation"]:c1(),["InventoryReservationListResponse"]:c2(),["InventoryReservationOwner"]:c3(),["InventoryRoutingSource"]:c4(),["MoneyValue"]:c5(),["NextAction"]:c6(),["NextActionMerchantAccountSession"]:c7(),["ReservationLine"]:c8(),["ResponseMeta"]:c9(),["ResponseWarning"]:c10(),["SharedCodec1"]:c11(),["SharedCodec448"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryReservationListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
