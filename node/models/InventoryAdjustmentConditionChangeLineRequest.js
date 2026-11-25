import { d9210 as c0, d9215 as c1, d9216 as c2, d9217 as c3, d9218 as c4, d9219 as c5 } from '../descriptors/data/417.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d9210 as d9210 } from '../descriptors/data/417.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9210;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryAdjustmentConditionChangeLineRequest"]:c0(),["SharedCodec1424"]:c1(),["SharedCodec1425"]:c2(),["SharedCodec1426"]:c3(),["SharedCodec1427"]:c4(),["SharedCodec1428"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryAdjustmentConditionChangeLineRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
