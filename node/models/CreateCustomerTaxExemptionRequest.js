import { d262 as c0 } from '../descriptors/data/13.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8429 as c1 } from '../descriptors/data/370.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8014 as c2 } from '../descriptors/data/347.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8262 as c3, d8263 as c4, d8264 as c5, d8265 as c6 } from '../descriptors/data/361.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d262 as d262 } from '../descriptors/data/13.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d262;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateCustomerTaxExemptionRequest"]:c0(),["CustomerTaxExemptionCoverageRequest"]:c1(),["MetadataRequest"]:c2(),["SharedCodec684"]:c3(),["SharedCodec685"]:c4(),["SharedCodec686"]:c5(),["SharedCodec687"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCustomerTaxExemptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
