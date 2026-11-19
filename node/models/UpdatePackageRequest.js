import { d8015 as c0 } from '../descriptors/data/347.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8111 as c1 } from '../descriptors/data/353.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9990 as c2, d9991 as c3, d9992 as c4, d9993 as c5 } from '../descriptors/data/460.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7764 as c6 } from '../descriptors/data/327.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7764 as d7764 } from '../descriptors/data/327.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7764;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec3072"]:c0(),["SharedCodec3075"]:c1(),["SharedCodec3135"]:c2(),["SharedCodec3136"]:c3(),["SharedCodec3137"]:c4(),["SharedCodec3138"]:c5(),["UpdatePackageRequest"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePackageRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
