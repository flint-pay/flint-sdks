import { d331 as c0 } from '../descriptors/data/20.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5918 as c1 } from '../descriptors/data/265.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8256 as c2, d8257 as c3 } from '../descriptors/data/400.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d331 as d331 } from '../descriptors/data/20.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d331;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReaderRequest"]:c0(),["MetadataRequest"]:c1(),["SharedCodec384"]:c2(),["SharedCodec385"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReaderRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
