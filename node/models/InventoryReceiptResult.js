import { d1601 as c0, d1605 as c1, d1612 as c2, d1613 as c3, d1616 as c4, d228 as c5, d229 as c6 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d1616 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1616;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryItem"]:c0(),["InventoryLevel"]:c1(),["InventoryReceipt"]:c2(),["InventoryReceiptLine"]:c3(),["InventoryReceiptResult"]:c4(),["InventorySourceSystem"]:c5(),["SharedCodec42"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryReceiptResult(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
