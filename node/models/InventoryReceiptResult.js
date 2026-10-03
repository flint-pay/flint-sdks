import { d1585 as c0, d1589 as c1, d1596 as c2, d1597 as c3, d1600 as c4, d251 as c5, d252 as c6 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d1600 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1600;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryItem"]:c0(),["InventoryLevel"]:c1(),["InventoryReceipt"]:c2(),["InventoryReceiptLine"]:c3(),["InventoryReceiptResult"]:c4(),["InventorySourceSystem"]:c5(),["SharedCodec64"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryReceiptResult(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
