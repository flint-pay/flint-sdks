import { d5919 as c0 } from '../descriptors/data/265.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6017 as c1 } from '../descriptors/data/271.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7857 as c2, d7858 as c3, d7859 as c4, d7860 as c5 } from '../descriptors/data/376.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5684 as c6 } from '../descriptors/data/249.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5684 as d5684 } from '../descriptors/data/249.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5684;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1697"]:c0(),["SharedCodec1700"]:c1(),["SharedCodec1760"]:c2(),["SharedCodec1761"]:c3(),["SharedCodec1762"]:c4(),["SharedCodec1763"]:c5(),["UpdatePackageRequest"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePackageRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
