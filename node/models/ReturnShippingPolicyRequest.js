import { d10538 as c0 } from '../descriptors/data/494.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10538 as d10538 } from '../descriptors/data/494.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10538;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnShippingPolicyRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnShippingPolicyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
