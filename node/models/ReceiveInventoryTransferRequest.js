import { d9193 as c0 } from '../descriptors/data/412.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9113 as c1, d9109 as c3, d9110 as c4, d9111 as c5, d9114 as c12, d9115 as c13, d9116 as c14, d9112 as c15 } from '../descriptors/data/408.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d1710 as c2 } from '../descriptors/data/85.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9212 as c6, d9213 as c7, d9214 as c8, d9215 as c9, d9216 as c10, d9217 as c11 } from '../descriptors/data/414.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d1710 as d1710 } from '../descriptors/data/85.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1710;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryProvenanceRequest"]:c0(),["InventorySourceSystemRequest"]:c1(),["ReceiveInventoryTransferRequest"]:c2(),["SharedCodec1385"]:c3(),["SharedCodec1386"]:c4(),["SharedCodec1387"]:c5(),["SharedCodec2537"]:c6(),["SharedCodec2538"]:c7(),["SharedCodec2539"]:c8(),["SharedCodec2540"]:c9(),["SharedCodec2541"]:c10(),["SharedCodec2542"]:c11(),["SharedCodec448"]:c12(),["SharedCodec449"]:c13(),["SharedCodec450"]:c14(),["SharedCodec451"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReceiveInventoryTransferRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
