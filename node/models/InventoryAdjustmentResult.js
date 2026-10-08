import { d10 as c0, d1583 as c1, d1586 as c2, d1601 as c3, d1605 as c4, d228 as c5, d229 as c6 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d1586 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1586;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AdjustmentLine"]:c0(),["InventoryAdjustment"]:c1(),["InventoryAdjustmentResult"]:c2(),["InventoryItem"]:c3(),["InventoryLevel"]:c4(),["InventorySourceSystem"]:c5(),["SharedCodec42"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryAdjustmentResult(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
