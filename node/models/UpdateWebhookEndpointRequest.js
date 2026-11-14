import { d6656 as c0, d6657 as c5 } from '../descriptors/data/306.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8870 as c1, d8871 as c2, d8872 as c3 } from '../descriptors/data/436.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5728 as c4 } from '../descriptors/data/253.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5728 as d5728 } from '../descriptors/data/253.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5728;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1714"]:c0(),["SharedCodec1834"]:c1(),["SharedCodec1835"]:c2(),["SharedCodec1836"]:c3(),["UpdateWebhookEndpointRequest"]:c4(),["WebhookSigningMethod"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateWebhookEndpointRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
