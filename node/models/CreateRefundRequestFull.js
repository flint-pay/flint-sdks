import { d336 as c0 } from '../descriptors/data/21.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5918 as c1 } from '../descriptors/data/265.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5789 as c2 } from '../descriptors/data/256.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7700 as c3 } from '../descriptors/data/368.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6899 as c4 } from '../descriptors/data/322.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8282 as c5, d8283 as c6, d8285 as c7, d8289 as c8 } from '../descriptors/data/402.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d336 as d336 } from '../descriptors/data/21.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d336;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateRefundRequestFull"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["RefundDestinations"]:c3(),["SharedCodec142"]:c4(),["SharedCodec387"]:c5(),["SharedCodec388"]:c6(),["SharedCodec390"]:c7(),["SplitReversalRequest"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateRefundRequestFull(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
