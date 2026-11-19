import { d1746 as c0 } from '../descriptors/data/86.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9377 as c1, d9378 as c2, d9379 as c3 } from '../descriptors/data/422.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d1746 as d1746 } from '../descriptors/data/86.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1746;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RemoveLicenseKeyPoolKeysRequest"]:c0(),["SharedCodec2581"]:c1(),["SharedCodec2582"]:c2(),["SharedCodec2583"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRemoveLicenseKeyPoolKeysRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
