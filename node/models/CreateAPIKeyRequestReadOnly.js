import { d200 as c0 } from '../descriptors/data/8.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5870 as c1 } from '../descriptors/data/261.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5815 as c2 } from '../descriptors/data/258.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d200 as d200 } from '../descriptors/data/8.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d200;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateAPIKeyRequestReadOnly"]:c0(),["SharedCodec194"]:c1(),["SharedCodec3"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateAPIKeyRequestReadOnly(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
