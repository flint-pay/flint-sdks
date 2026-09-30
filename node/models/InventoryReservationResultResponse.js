import { d1427 as c0, d1446 as c1, d1450 as c2, d1463 as c3, d1465 as c4, d1466 as c5, d1467 as c6, d100 as c7, d69 as c8, d1646 as c9, d1645 as c10, d1947 as c11, d1959 as c12, d1960 as c13 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1467 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1467;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryActionRequired"]:c0(),["InventoryItem"]:c1(),["InventoryLevel"]:c2(),["InventoryReservation"]:c3(),["InventoryReservationOwner"]:c4(),["InventoryReservationResult"]:c5(),["InventoryReservationResultResponse"]:c6(),["InventoryRoutingSource"]:c7(),["MoneyValue"]:c8(),["NextAction"]:c9(),["NextActionMerchantAccountSession"]:c10(),["ReservationLine"]:c11(),["ResponseMeta"]:c12(),["ResponseWarning"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryReservationResultResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
