import { d1427 as c0, d1463 as c1, d1464 as c2, d1465 as c3, d100 as c4, d69 as c5, d1646 as c6, d1645 as c7, d1947 as c8, d1959 as c9, d1960 as c10 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1464 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1464;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryActionRequired"]:c0(),["InventoryReservation"]:c1(),["InventoryReservationListResponse"]:c2(),["InventoryReservationOwner"]:c3(),["InventoryRoutingSource"]:c4(),["MoneyValue"]:c5(),["NextAction"]:c6(),["NextActionMerchantAccountSession"]:c7(),["ReservationLine"]:c8(),["ResponseMeta"]:c9(),["ResponseWarning"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryReservationListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
