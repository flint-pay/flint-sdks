import { d8346 as c0 } from '../descriptors/data/406.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8366 as c1, d8367 as c2, d8368 as c3, d8369 as c4 } from '../descriptors/data/408.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8346 as d8346 } from '../descriptors/data/406.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8346;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnPolicyScopeRequest"]:c0(),["SharedCodec1501"]:c1(),["SharedCodec1502"]:c2(),["SharedCodec1503"]:c3(),["SharedCodec1504"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyScopeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
