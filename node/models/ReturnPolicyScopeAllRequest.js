import { d1827 as c0 } from '../descriptors/data/91.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10555 as c1 } from '../descriptors/data/495.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d1827 as d1827 } from '../descriptors/data/91.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1827;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnPolicyScopeAllRequest"]:c0(),["SharedCodec2746"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyScopeAllRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
