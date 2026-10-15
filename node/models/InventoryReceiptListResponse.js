import { d1614 as c0, d1615 as c1, d1617 as c2, d228 as c3, d323 as c4, d1823 as c5, d1824 as c6, d2178 as c7, d2179 as c8, d14 as c9, d229 as c10, d1822 as c11 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1617 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1617;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryReceipt"]:c0(),["InventoryReceiptLine"]:c1(),["InventoryReceiptListResponse"]:c2(),["InventorySourceSystem"]:c3(),["MoneyValue"]:c4(),["NextAction"]:c5(),["NextActionMerchantAccountSession"]:c6(),["ResponseMeta"]:c7(),["ResponseWarning"]:c8(),["SharedCodec1"]:c9(),["SharedCodec42"]:c10(),["SharedCodec467"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryReceiptListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
