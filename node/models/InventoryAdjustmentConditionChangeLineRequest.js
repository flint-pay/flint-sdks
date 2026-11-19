import { d9083 as c0, d9088 as c1, d9089 as c2, d9090 as c3, d9091 as c4, d9092 as c5 } from '../descriptors/data/407.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9083 as d9083 } from '../descriptors/data/407.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9083;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryAdjustmentConditionChangeLineRequest"]:c0(),["SharedCodec1388"]:c1(),["SharedCodec1389"]:c2(),["SharedCodec1390"]:c3(),["SharedCodec1391"]:c4(),["SharedCodec1392"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryAdjustmentConditionChangeLineRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
