import { d7582 as c0 } from '../descriptors/data/317.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7582 as d7582 } from '../descriptors/data/317.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7582;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SubscriptionGiftRecipientRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionGiftRecipientRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
