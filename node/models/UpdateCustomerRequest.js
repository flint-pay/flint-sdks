import { d6325 as c0, d6326 as c7, d6327 as c8 } from '../descriptors/data/288.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6018 as c1, d6019 as c2 } from '../descriptors/data/271.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6314 as c3, d6315 as c12 } from '../descriptors/data/287.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5920 as c4, d5921 as c5, d5919 as c6 } from '../descriptors/data/265.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6289 as c9, d6290 as c10, d6291 as c11 } from '../descriptors/data/286.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5654 as c13 } from '../descriptors/data/246.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5654 as d5654 } from '../descriptors/data/246.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5654;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DocumentTaxIDRequest"]:c0(),["SharedCodec0"]:c1(),["SharedCodec1"]:c2(),["SharedCodec1000"]:c3(),["SharedCodec1695"]:c4(),["SharedCodec1696"]:c5(),["SharedCodec1697"]:c6(),["SharedCodec1702"]:c7(),["SharedCodec1703"]:c8(),["SharedCodec1704"]:c9(),["SharedCodec1705"]:c10(),["SharedCodec1706"]:c11(),["SharedCodec999"]:c12(),["UpdateCustomerRequest"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateCustomerRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
