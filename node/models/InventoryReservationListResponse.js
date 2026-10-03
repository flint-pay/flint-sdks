import { d1564 as c0, d1600 as c1, d1601 as c2, d1602 as c3, d106 as c4, d74 as c5, d1784 as c6, d1783 as c7, d2106 as c8, d2118 as c9, d2119 as c10 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d1601 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1601;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryActionRequired"]:c0(),["InventoryReservation"]:c1(),["InventoryReservationListResponse"]:c2(),["InventoryReservationOwner"]:c3(),["InventoryRoutingSource"]:c4(),["MoneyValue"]:c5(),["NextAction"]:c6(),["NextActionMerchantAccountSession"]:c7(),["ReservationLine"]:c8(),["ResponseMeta"]:c9(),["ResponseWarning"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryReservationListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
