import { d251 as c0, d1575 as c1, d1576 as c2, d1580 as c3, d1583 as c4, d1587 as c5, d249 as c6, d250 as c7 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d1580 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1580;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CountProvenance"]:c0(),["InventoryCount"]:c1(),["InventoryCountLine"]:c2(),["InventoryCountResult"]:c3(),["InventoryItem"]:c4(),["InventoryLevel"]:c5(),["InventorySourceSystem"]:c6(),["SharedCodec64"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryCountResult(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
