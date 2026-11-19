import { d9193 as c0 } from '../descriptors/data/412.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9113 as c1, d9109 as c3, d9110 as c4, d9111 as c5, d9114 as c8, d9115 as c9, d9116 as c10, d9112 as c11 } from '../descriptors/data/408.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d1754 as c2 } from '../descriptors/data/87.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9218 as c6, d9219 as c7 } from '../descriptors/data/414.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d1754 as d1754 } from '../descriptors/data/87.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1754;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryProvenanceRequest"]:c0(),["InventorySourceSystemRequest"]:c1(),["ReportInventoryTransferLossRequest"]:c2(),["SharedCodec1385"]:c3(),["SharedCodec1386"]:c4(),["SharedCodec1387"]:c5(),["SharedCodec2602"]:c6(),["SharedCodec2603"]:c7(),["SharedCodec448"]:c8(),["SharedCodec449"]:c9(),["SharedCodec450"]:c10(),["SharedCodec451"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReportInventoryTransferLossRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
