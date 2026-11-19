import { d1202 as c0 } from '../descriptors/data/60.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d1202 as d1202 } from '../descriptors/data/60.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1202;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LicenseKeyVersionRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeLicenseKeyVersionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
