import { d8429 as c0 } from '../descriptors/data/370.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8015 as c1 } from '../descriptors/data/347.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8111 as c2 } from '../descriptors/data/353.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8398 as c3 } from '../descriptors/data/368.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8262 as c4, d8263 as c5, d8264 as c6, d8265 as c7 } from '../descriptors/data/361.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7733 as c8 } from '../descriptors/data/325.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7733 as d7733 } from '../descriptors/data/325.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7733;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerTaxExemptionCoverageRequest"]:c0(),["SharedCodec3072"]:c1(),["SharedCodec3075"]:c2(),["SharedCodec3082"]:c3(),["SharedCodec684"]:c4(),["SharedCodec685"]:c5(),["SharedCodec686"]:c6(),["SharedCodec687"]:c7(),["UpdateCustomerTaxExemptionRequest"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateCustomerTaxExemptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
