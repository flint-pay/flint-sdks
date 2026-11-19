import { d9851 as c0 } from '../descriptors/data/452.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9851 as d9851 } from '../descriptors/data/452.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9851;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderEditRemovalRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderEditRemovalRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
