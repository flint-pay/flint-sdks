import { d305 as c0 } from '../descriptors/data/16.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d9210 as c1, d9215 as c6, d9216 as c7, d9217 as c8, d9218 as c9, d9219 as c10 } from '../descriptors/data/417.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d9240 as c2, d9236 as c3, d9237 as c4, d9238 as c5, d9241 as c11, d9242 as c12, d9243 as c13, d9239 as c14 } from '../descriptors/data/418.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d305 as d305 } from '../descriptors/data/16.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d305;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryAdjustmentConditionChangeRequest"]:c0(),["InventoryAdjustmentConditionChangeLineRequest"]:c1(),["InventorySourceSystemRequest"]:c2(),["SharedCodec1421"]:c3(),["SharedCodec1422"]:c4(),["SharedCodec1423"]:c5(),["SharedCodec1424"]:c6(),["SharedCodec1425"]:c7(),["SharedCodec1426"]:c8(),["SharedCodec1427"]:c9(),["SharedCodec1428"]:c10(),["SharedCodec459"]:c11(),["SharedCodec460"]:c12(),["SharedCodec461"]:c13(),["SharedCodec462"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryAdjustmentConditionChangeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
