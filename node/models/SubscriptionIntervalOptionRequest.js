import { d10878 as c0 } from '../descriptors/data/513.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10878 as d10878 } from '../descriptors/data/513.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10878;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SubscriptionIntervalOptionRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionIntervalOptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
