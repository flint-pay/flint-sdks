import { d409 as c0 } from '../descriptors/data/25.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8014 as c1 } from '../descriptors/data/347.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d409 as d409 } from '../descriptors/data/25.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d409;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateSmartReaderRequest"]:c0(),["MetadataRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSmartReaderRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
