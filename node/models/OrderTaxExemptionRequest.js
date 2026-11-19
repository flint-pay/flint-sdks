import { d8429 as c0 } from '../descriptors/data/370.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9335 as c1, d9343 as c2, d9344 as c3, d9345 as c4, d9346 as c5, d9347 as c6, d9348 as c7, d9349 as c8 } from '../descriptors/data/420.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8262 as c9, d8263 as c10, d8264 as c11, d8265 as c12 } from '../descriptors/data/361.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9335 as d9335 } from '../descriptors/data/420.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9335;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerTaxExemptionCoverageRequest"]:c0(),["OrderTaxExemptionRequest"]:c1(),["SharedCodec1973"]:c2(),["SharedCodec1974"]:c3(),["SharedCodec1975"]:c4(),["SharedCodec1976"]:c5(),["SharedCodec1980"]:c6(),["SharedCodec1981"]:c7(),["SharedCodec1982"]:c8(),["SharedCodec684"]:c9(),["SharedCodec685"]:c10(),["SharedCodec686"]:c11(),["SharedCodec687"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxExemptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
