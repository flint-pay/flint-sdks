import { d1625 as c0, d1626 as c1, d1628 as c2, d257 as c3, d77 as c4, d1823 as c5, d1822 as c6, d2157 as c7, d2158 as c8, d14 as c9, d1821 as c10, d258 as c11 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d1628 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1628;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryReceipt"]:c0(),["InventoryReceiptLine"]:c1(),["InventoryReceiptListResponse"]:c2(),["InventorySourceSystem"]:c3(),["MoneyValue"]:c4(),["NextAction"]:c5(),["NextActionMerchantAccountSession"]:c6(),["ResponseMeta"]:c7(),["ResponseWarning"]:c8(),["SharedCodec1"]:c9(),["SharedCodec487"]:c10(),["SharedCodec65"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryReceiptListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
