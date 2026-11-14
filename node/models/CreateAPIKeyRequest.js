import { d198 as c0 } from '../descriptors/data/8.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5870 as c1 } from '../descriptors/data/261.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5860 as c2, d5861 as c3, d5862 as c4 } from '../descriptors/data/260.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5815 as c5 } from '../descriptors/data/258.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d198 as d198 } from '../descriptors/data/8.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d198;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateAPIKeyRequest"]:c0(),["SharedCodec194"]:c1(),["SharedCodec195"]:c2(),["SharedCodec196"]:c3(),["SharedCodec197"]:c4(),["SharedCodec3"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateAPIKeyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
