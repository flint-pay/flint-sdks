import { d1594 as c0, d1595 as c1, d249 as c2, d250 as c3 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d1594 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1594;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryReceipt"]:c0(),["InventoryReceiptLine"]:c1(),["InventorySourceSystem"]:c2(),["SharedCodec64"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryReceipt(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
