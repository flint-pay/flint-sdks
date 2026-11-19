import { d1865 as c0 } from '../descriptors/data/94.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d1865 as d1865 } from '../descriptors/data/94.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1865;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RevealLicenseKeyRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRevealLicenseKeyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
