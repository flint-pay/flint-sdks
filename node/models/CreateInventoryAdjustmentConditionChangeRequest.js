import { d302 as c0 } from '../descriptors/data/15.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9083 as c1, d9088 as c6, d9089 as c7, d9090 as c8, d9091 as c9, d9092 as c10 } from '../descriptors/data/407.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9113 as c2, d9109 as c3, d9110 as c4, d9111 as c5, d9114 as c11, d9115 as c12, d9116 as c13, d9112 as c14 } from '../descriptors/data/408.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d302 as d302 } from '../descriptors/data/15.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d302;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryAdjustmentConditionChangeRequest"]:c0(),["InventoryAdjustmentConditionChangeLineRequest"]:c1(),["InventorySourceSystemRequest"]:c2(),["SharedCodec1385"]:c3(),["SharedCodec1386"]:c4(),["SharedCodec1387"]:c5(),["SharedCodec1388"]:c6(),["SharedCodec1389"]:c7(),["SharedCodec1390"]:c8(),["SharedCodec1391"]:c9(),["SharedCodec1392"]:c10(),["SharedCodec448"]:c11(),["SharedCodec449"]:c12(),["SharedCodec450"]:c13(),["SharedCodec451"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryAdjustmentConditionChangeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
