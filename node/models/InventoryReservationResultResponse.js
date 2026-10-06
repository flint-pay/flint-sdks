import { d1570 as c0, d1589 as c1, d1593 as c2, d1606 as c3, d1608 as c4, d1609 as c5, d1610 as c6, d110 as c7, d77 as c8, d1797 as c9, d1796 as c10, d2118 as c11, d2131 as c12, d2132 as c13, d14 as c14, d1795 as c15 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1610 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1610;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryActionRequired"]:c0(),["InventoryItem"]:c1(),["InventoryLevel"]:c2(),["InventoryReservation"]:c3(),["InventoryReservationOwner"]:c4(),["InventoryReservationResult"]:c5(),["InventoryReservationResultResponse"]:c6(),["InventoryRoutingSource"]:c7(),["MoneyValue"]:c8(),["NextAction"]:c9(),["NextActionMerchantAccountSession"]:c10(),["ReservationLine"]:c11(),["ResponseMeta"]:c12(),["ResponseWarning"]:c13(),["SharedCodec1"]:c14(),["SharedCodec485"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryReservationResultResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
