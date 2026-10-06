import { d1595 as c0, d1614 as c1, d1618 as c2, d1631 as c3, d1633 as c4, d1634 as c5, d1635 as c6, d110 as c7, d77 as c8, d1823 as c9, d1822 as c10, d2144 as c11, d2157 as c12, d2158 as c13, d14 as c14, d1821 as c15 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d1635 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1635;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryActionRequired"]:c0(),["InventoryItem"]:c1(),["InventoryLevel"]:c2(),["InventoryReservation"]:c3(),["InventoryReservationOwner"]:c4(),["InventoryReservationResult"]:c5(),["InventoryReservationResultResponse"]:c6(),["InventoryRoutingSource"]:c7(),["MoneyValue"]:c8(),["NextAction"]:c9(),["NextActionMerchantAccountSession"]:c10(),["ReservationLine"]:c11(),["ResponseMeta"]:c12(),["ResponseWarning"]:c13(),["SharedCodec1"]:c14(),["SharedCodec487"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryReservationResultResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
