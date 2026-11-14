import { d6316 as c0 } from '../descriptors/data/287.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7235 as c1 } from '../descriptors/data/338.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7243 as c2, d7244 as c3, d7245 as c4, d7246 as c5, d7247 as c6, d7248 as c7, d7249 as c8 } from '../descriptors/data/339.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6161 as c9, d6162 as c10, d6163 as c11, d6164 as c12 } from '../descriptors/data/279.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7235 as d7235 } from '../descriptors/data/338.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7235;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerTaxExemptionCoverageRequest"]:c0(),["OrderTaxExemptionRequest"]:c1(),["SharedCodec1098"]:c2(),["SharedCodec1099"]:c3(),["SharedCodec1100"]:c4(),["SharedCodec1101"]:c5(),["SharedCodec1102"]:c6(),["SharedCodec1103"]:c7(),["SharedCodec1104"]:c8(),["SharedCodec490"]:c9(),["SharedCodec491"]:c10(),["SharedCodec492"]:c11(),["SharedCodec493"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxExemptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
