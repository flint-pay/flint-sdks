import { d5919 as c0 } from '../descriptors/data/265.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6017 as c1 } from '../descriptors/data/271.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8129 as c2 } from '../descriptors/data/393.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5693 as c3 } from '../descriptors/data/250.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5693 as d5693 } from '../descriptors/data/250.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5693;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1697"]:c0(),["SharedCodec1700"]:c1(),["SharedCodec1785"]:c2(),["UpdatePriceListRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePriceListRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
