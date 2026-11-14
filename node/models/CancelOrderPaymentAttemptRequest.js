import { d124 as c0 } from '../descriptors/data/6.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d124 as d124 } from '../descriptors/data/6.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d124;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CancelOrderPaymentAttemptRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCancelOrderPaymentAttemptRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
