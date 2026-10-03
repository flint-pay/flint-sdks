import { d1585 as c0, d1589 as c1, d1593 as c2, d1613 as c3, d251 as c4, d252 as c5 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d1593 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1593;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryItem"]:c0(),["InventoryLevel"]:c1(),["InventoryMovement"]:c2(),["InventorySourceReference"]:c3(),["InventorySourceSystem"]:c4(),["SharedCodec64"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryMovement(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
