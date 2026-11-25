import { d308 as c0 } from '../descriptors/data/16.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d9212 as c1 } from '../descriptors/data/417.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d9240 as c2, d9236 as c3, d9237 as c4, d9238 as c5, d9241 as c6, d9242 as c7, d9243 as c8, d9239 as c9 } from '../descriptors/data/418.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d308 as d308 } from '../descriptors/data/16.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d308;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryAdjustmentQuantityRequest"]:c0(),["InventoryAdjustmentQuantityLineRequest"]:c1(),["InventorySourceSystemRequest"]:c2(),["SharedCodec1421"]:c3(),["SharedCodec1422"]:c4(),["SharedCodec1423"]:c5(),["SharedCodec459"]:c6(),["SharedCodec460"]:c7(),["SharedCodec461"]:c8(),["SharedCodec462"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryAdjustmentQuantityRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
