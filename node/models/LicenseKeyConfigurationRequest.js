import { d1174 as c0 } from '../descriptors/data/59.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10322 as c1, d10323 as c2 } from '../descriptors/data/481.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d1174 as d1174 } from '../descriptors/data/59.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1174;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LicenseKeyConfigurationRequest"]:c0(),["SharedCodec1744"]:c1(),["SharedCodec1745"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeLicenseKeyConfigurationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
