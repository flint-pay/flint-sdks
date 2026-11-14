import { d8713 as c0 } from '../descriptors/data/427.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8713 as d8713 } from '../descriptors/data/427.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8713;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SubscriptionEndAfterCyclesRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionEndAfterCyclesRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
