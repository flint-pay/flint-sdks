import { d1582 as c0, d1618 as c1, d1619 as c2, d1620 as c3, d1625 as c4, d323 as c5, d1820 as c6, d1821 as c7, d2149 as c8, d2162 as c9, d2163 as c10, d14 as c11, d1819 as c12 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d1619 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1619;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryActionRequired"]:c0(),["InventoryReservation"]:c1(),["InventoryReservationListResponse"]:c2(),["InventoryReservationOwner"]:c3(),["InventoryRoutingSource"]:c4(),["MoneyValue"]:c5(),["NextAction"]:c6(),["NextActionMerchantAccountSession"]:c7(),["ReservationLine"]:c8(),["ResponseMeta"]:c9(),["ResponseWarning"]:c10(),["SharedCodec1"]:c11(),["SharedCodec466"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryReservationListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
