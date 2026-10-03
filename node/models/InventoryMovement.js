import { d1583 as c0, d1587 as c1, d1591 as c2, d1611 as c3, d249 as c4, d250 as c5 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d1591 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1591;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryItem"]:c0(),["InventoryLevel"]:c1(),["InventoryMovement"]:c2(),["InventorySourceReference"]:c3(),["InventorySourceSystem"]:c4(),["SharedCodec64"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryMovement(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
