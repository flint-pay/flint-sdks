import { d7447 as c0 } from '../descriptors/data/354.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7447 as d7447 } from '../descriptors/data/354.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7447;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SubscriptionSwapPreviewRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionSwapPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
