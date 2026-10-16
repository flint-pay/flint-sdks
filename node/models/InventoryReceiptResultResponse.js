import { d1603 as c0, d1607 as c1, d1614 as c2, d1615 as c3, d1618 as c4, d1619 as c5, d228 as c6, d323 as c7, d1823 as c8, d1824 as c9, d2178 as c10, d2179 as c11, d14 as c12, d229 as c13, d1822 as c14 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d1619 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1619;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryItem"]:c0(),["InventoryLevel"]:c1(),["InventoryReceipt"]:c2(),["InventoryReceiptLine"]:c3(),["InventoryReceiptResult"]:c4(),["InventoryReceiptResultResponse"]:c5(),["InventorySourceSystem"]:c6(),["MoneyValue"]:c7(),["NextAction"]:c8(),["NextActionMerchantAccountSession"]:c9(),["ResponseMeta"]:c10(),["ResponseWarning"]:c11(),["SharedCodec1"]:c12(),["SharedCodec42"]:c13(),["SharedCodec467"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryReceiptResultResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
