import { d1740 as c0 } from '../descriptors/data/86.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d1740 as d1740 } from '../descriptors/data/86.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1740;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReleaseLicenseKeyActivationRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReleaseLicenseKeyActivationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
