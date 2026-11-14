import { d5919 as c0 } from '../descriptors/data/265.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6017 as c1 } from '../descriptors/data/271.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5709 as c2 } from '../descriptors/data/251.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5709 as d5709 } from '../descriptors/data/251.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5709;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1697"]:c0(),["SharedCodec1700"]:c1(),["UpdateReturnRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateReturnRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
