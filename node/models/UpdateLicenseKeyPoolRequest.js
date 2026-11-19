import { d8015 as c0 } from '../descriptors/data/347.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8111 as c1 } from '../descriptors/data/353.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7751 as c2 } from '../descriptors/data/326.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7751 as d7751 } from '../descriptors/data/326.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7751;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec3072"]:c0(),["SharedCodec3075"]:c1(),["UpdateLicenseKeyPoolRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateLicenseKeyPoolRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
