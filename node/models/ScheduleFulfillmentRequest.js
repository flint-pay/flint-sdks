import { d1441 as c0 } from '../descriptors/data/68.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d1441 as d1441 } from '../descriptors/data/68.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1441;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ScheduleFulfillmentRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeScheduleFulfillmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
