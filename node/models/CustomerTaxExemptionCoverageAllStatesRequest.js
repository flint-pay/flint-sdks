import { d450 as c0 } from '../descriptors/data/27.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6161 as c1, d6163 as c2 } from '../descriptors/data/279.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d450 as d450 } from '../descriptors/data/27.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d450;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerTaxExemptionCoverageAllStatesRequest"]:c0(),["SharedCodec490"]:c1(),["SharedCodec492"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCustomerTaxExemptionCoverageAllStatesRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
