import { d6316 as c0 } from '../descriptors/data/287.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d1061 as c1 } from '../descriptors/data/53.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7245 as c2 } from '../descriptors/data/339.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6161 as c3, d6162 as c4, d6163 as c5, d6164 as c6 } from '../descriptors/data/279.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d1061 as d1061 } from '../descriptors/data/53.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1061;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerTaxExemptionCoverageRequest"]:c0(),["OrderTaxExemptionInputOrder"]:c1(),["SharedCodec1100"]:c2(),["SharedCodec490"]:c3(),["SharedCodec491"]:c4(),["SharedCodec492"]:c5(),["SharedCodec493"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxExemptionInputOrder(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
