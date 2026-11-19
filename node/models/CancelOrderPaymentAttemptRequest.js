import { d143 as c0 } from '../descriptors/data/7.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d143 as d143 } from '../descriptors/data/7.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d143;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CancelOrderPaymentAttemptRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCancelOrderPaymentAttemptRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
