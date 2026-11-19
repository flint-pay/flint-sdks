import { d1222 as c0 } from '../descriptors/data/61.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d1222 as d1222 } from '../descriptors/data/61.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1222;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LookupLicenseKeyRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeLookupLicenseKeyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
