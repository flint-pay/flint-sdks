import { d734 as c0 } from '../descriptors/data/41.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9193 as c1 } from '../descriptors/data/412.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9113 as c2, d9109 as c5, d9110 as c6, d9111 as c7, d9114 as c8, d9115 as c9, d9116 as c10, d9112 as c11 } from '../descriptors/data/408.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9200 as c3, d9201 as c4 } from '../descriptors/data/413.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d734 as d734 } from '../descriptors/data/41.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d734;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DepartInventoryTransferRequest"]:c0(),["InventoryProvenanceRequest"]:c1(),["InventorySourceSystemRequest"]:c2(),["SharedCodec1099"]:c3(),["SharedCodec1100"]:c4(),["SharedCodec1385"]:c5(),["SharedCodec1386"]:c6(),["SharedCodec1387"]:c7(),["SharedCodec448"]:c8(),["SharedCodec449"]:c9(),["SharedCodec450"]:c10(),["SharedCodec451"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDepartInventoryTransferRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
