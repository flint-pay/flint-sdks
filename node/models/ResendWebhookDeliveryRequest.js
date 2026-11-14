import { d1335 as c0 } from '../descriptors/data/64.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d1335 as d1335 } from '../descriptors/data/64.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1335;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ResendWebhookDeliveryRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeResendWebhookDeliveryRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
