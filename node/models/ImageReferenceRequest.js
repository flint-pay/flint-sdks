import { d8667 as c0 } from '../descriptors/data/383.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8667 as d8667 } from '../descriptors/data/383.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8667;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ImageReferenceRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeImageReferenceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
