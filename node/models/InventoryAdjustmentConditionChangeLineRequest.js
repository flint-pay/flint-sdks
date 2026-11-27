import { d9210 as c0, d9215 as c1, d9216 as c2, d9217 as c3, d9218 as c4, d9219 as c5 } from '../descriptors/data/418.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d9210 as d9210 } from '../descriptors/data/418.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9210;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryAdjustmentConditionChangeLineRequest"]:c0(),["SharedCodec1424"]:c1(),["SharedCodec1425"]:c2(),["SharedCodec1426"]:c3(),["SharedCodec1427"]:c4(),["SharedCodec1428"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryAdjustmentConditionChangeLineRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
