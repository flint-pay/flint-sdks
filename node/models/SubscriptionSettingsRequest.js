import { d5595 as c0 } from '../descriptors/data/244.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5595 as d5595 } from '../descriptors/data/244.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5595;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SubscriptionSettingsRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionSettingsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
