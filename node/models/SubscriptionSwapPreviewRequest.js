import { d9583 as c0 } from '../descriptors/data/436.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9583 as d9583 } from '../descriptors/data/436.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9583;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SubscriptionSwapPreviewRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionSwapPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
