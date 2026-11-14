import { d1323 as c0 } from '../descriptors/data/63.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d1323 as d1323 } from '../descriptors/data/63.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1323;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RenewSubscriptionRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRenewSubscriptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
