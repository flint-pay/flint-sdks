import { d7793 as c0 } from '../descriptors/data/329.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7793 as d7793 } from '../descriptors/data/329.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7793;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["UpdateRiskListRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateRiskListRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
