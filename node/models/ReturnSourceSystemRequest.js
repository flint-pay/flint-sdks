import { d8477 as c0 } from '../descriptors/data/416.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8337 as c1, d8338 as c2, d8339 as c3 } from '../descriptors/data/405.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7015 as c4 } from '../descriptors/data/328.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8477 as d8477 } from '../descriptors/data/416.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8477;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnSourceSystemRequest"]:c0(),["SharedCodec1470"]:c1(),["SharedCodec1471"]:c2(),["SharedCodec1472"]:c3(),["SharedCodec306"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnSourceSystemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
