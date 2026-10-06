import { d1595 as c0, d1631 as c1, d1632 as c2, d1633 as c3, d110 as c4, d77 as c5, d1823 as c6, d1822 as c7, d2144 as c8, d2157 as c9, d2158 as c10, d14 as c11, d1821 as c12 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d1632 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1632;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryActionRequired"]:c0(),["InventoryReservation"]:c1(),["InventoryReservationListResponse"]:c2(),["InventoryReservationOwner"]:c3(),["InventoryRoutingSource"]:c4(),["MoneyValue"]:c5(),["NextAction"]:c6(),["NextActionMerchantAccountSession"]:c7(),["ReservationLine"]:c8(),["ResponseMeta"]:c9(),["ResponseWarning"]:c10(),["SharedCodec1"]:c11(),["SharedCodec487"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryReservationListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
