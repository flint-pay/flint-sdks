import { d10 as c0, d1538 as c1, d1541 as c2, d1556 as c3, d1560 as c4, d219 as c5, d220 as c6 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d1541 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1541;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AdjustmentLine"]:c0(),["InventoryAdjustment"]:c1(),["InventoryAdjustmentResult"]:c2(),["InventoryItem"]:c3(),["InventoryLevel"]:c4(),["InventorySourceSystem"]:c5(),["SharedCodec40"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryAdjustmentResult(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
