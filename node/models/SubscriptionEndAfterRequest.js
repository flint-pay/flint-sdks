import { d7541 as c0 } from '../descriptors/data/359.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8748 as c1 } from '../descriptors/data/430.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5537 as c2 } from '../descriptors/data/241.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5537 as d5537 } from '../descriptors/data/241.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5537;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec103"]:c0(),["SharedCodec441"]:c1(),["SubscriptionEndAfterRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionEndAfterRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
