import { d9222 as c0, d9223 as c1, d9224 as c2 } from '../descriptors/data/414.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7748 as c3 } from '../descriptors/data/326.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7748 as d7748 } from '../descriptors/data/326.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7748;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec3101"]:c0(),["SharedCodec3102"]:c1(),["SharedCodec3103"]:c2(),["UpdateInventoryTransferRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateInventoryTransferRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
