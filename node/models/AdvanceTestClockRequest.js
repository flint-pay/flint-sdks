import { d17 as c0 } from '../descriptors/data/0.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d17 as d17 } from '../descriptors/data/0.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d17;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AdvanceTestClockRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeAdvanceTestClockRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
