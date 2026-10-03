import { d8 as c0, d1565 as c1, d1568 as c2, d1583 as c3, d1587 as c4, d249 as c5, d250 as c6 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d1568 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1568;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AdjustmentLine"]:c0(),["InventoryAdjustment"]:c1(),["InventoryAdjustmentResult"]:c2(),["InventoryItem"]:c3(),["InventoryLevel"]:c4(),["InventorySourceSystem"]:c5(),["SharedCodec64"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryAdjustmentResult(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
