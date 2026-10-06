import { d1614 as c0, d1618 as c1, d1622 as c2, d1623 as c3, d1642 as c4, d257 as c5, d77 as c6, d1823 as c7, d1822 as c8, d2157 as c9, d2158 as c10, d14 as c11, d1821 as c12, d258 as c13 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d1623 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1623;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryItem"]:c0(),["InventoryLevel"]:c1(),["InventoryMovement"]:c2(),["InventoryMovementListResponse"]:c3(),["InventorySourceReference"]:c4(),["InventorySourceSystem"]:c5(),["MoneyValue"]:c6(),["NextAction"]:c7(),["NextActionMerchantAccountSession"]:c8(),["ResponseMeta"]:c9(),["ResponseWarning"]:c10(),["SharedCodec1"]:c11(),["SharedCodec487"]:c12(),["SharedCodec65"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryMovementListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
