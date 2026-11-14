import { d6316 as c0 } from '../descriptors/data/287.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5919 as c1 } from '../descriptors/data/265.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6017 as c2 } from '../descriptors/data/271.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6292 as c3 } from '../descriptors/data/286.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6161 as c4, d6162 as c5, d6163 as c6, d6164 as c7 } from '../descriptors/data/279.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5655 as c8 } from '../descriptors/data/247.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5655 as d5655 } from '../descriptors/data/247.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5655;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerTaxExemptionCoverageRequest"]:c0(),["SharedCodec1697"]:c1(),["SharedCodec1700"]:c2(),["SharedCodec1707"]:c3(),["SharedCodec490"]:c4(),["SharedCodec491"]:c5(),["SharedCodec492"]:c6(),["SharedCodec493"]:c7(),["UpdateCustomerTaxExemptionRequest"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateCustomerTaxExemptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
