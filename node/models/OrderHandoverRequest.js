import { d9868 as c0 } from '../descriptors/data/453.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9868 as d9868 } from '../descriptors/data/453.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9868;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderHandoverRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderHandoverRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
