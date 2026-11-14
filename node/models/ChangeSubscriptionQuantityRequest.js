import { d151 as c0 } from '../descriptors/data/7.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7545 as c1 } from '../descriptors/data/359.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d151 as d151 } from '../descriptors/data/7.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d151;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ChangeSubscriptionQuantityRequest"]:c0(),["SubscriptionQuantityChangeLineItemRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeChangeSubscriptionQuantityRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
