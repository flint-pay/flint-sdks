import { d1644 as c0, d1654 as c1, d1658 as c2, d77 as c3, d1823 as c4, d1822 as c5, d2157 as c6, d2158 as c7, d14 as c8, d1821 as c9 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d1658 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1658;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryTransfer"]:c0(),["InventoryTransferLine"]:c1(),["InventoryTransferResponse"]:c2(),["MoneyValue"]:c3(),["NextAction"]:c4(),["NextActionMerchantAccountSession"]:c5(),["ResponseMeta"]:c6(),["ResponseWarning"]:c7(),["SharedCodec1"]:c8(),["SharedCodec487"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryTransferResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
