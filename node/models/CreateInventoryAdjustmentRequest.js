import { d306 as c0 } from '../descriptors/data/16.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9083 as c1, d9085 as c2, d9087 as c3, d9088 as c8, d9089 as c9, d9090 as c10, d9091 as c11, d9092 as c12, d9097 as c17, d9098 as c18 } from '../descriptors/data/407.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9113 as c4, d9109 as c5, d9110 as c6, d9111 as c7, d9114 as c13, d9115 as c14, d9116 as c15, d9112 as c16, d9099 as c19, d9100 as c20, d9101 as c21, d9102 as c22, d9103 as c23 } from '../descriptors/data/408.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d306 as d306 } from '../descriptors/data/16.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d306;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryAdjustmentRequest"]:c0(),["InventoryAdjustmentConditionChangeLineRequest"]:c1(),["InventoryAdjustmentQuantityLineRequest"]:c2(),["InventoryAdjustmentSetLineRequest"]:c3(),["InventorySourceSystemRequest"]:c4(),["SharedCodec1385"]:c5(),["SharedCodec1386"]:c6(),["SharedCodec1387"]:c7(),["SharedCodec1388"]:c8(),["SharedCodec1389"]:c9(),["SharedCodec1390"]:c10(),["SharedCodec1391"]:c11(),["SharedCodec1392"]:c12(),["SharedCodec448"]:c13(),["SharedCodec449"]:c14(),["SharedCodec450"]:c15(),["SharedCodec451"]:c16(),["SharedCodec452"]:c17(),["SharedCodec453"]:c18(),["SharedCodec454"]:c19(),["SharedCodec455"]:c20(),["SharedCodec456"]:c21(),["SharedCodec457"]:c22(),["SharedCodec458"]:c23()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryAdjustmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
