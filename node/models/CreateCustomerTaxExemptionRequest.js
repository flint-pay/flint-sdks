import { d225 as c0 } from '../descriptors/data/11.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6316 as c1 } from '../descriptors/data/287.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5918 as c2 } from '../descriptors/data/265.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6161 as c3, d6162 as c4, d6163 as c5, d6164 as c6 } from '../descriptors/data/279.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d225 as d225 } from '../descriptors/data/11.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d225;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateCustomerTaxExemptionRequest"]:c0(),["CustomerTaxExemptionCoverageRequest"]:c1(),["MetadataRequest"]:c2(),["SharedCodec490"]:c3(),["SharedCodec491"]:c4(),["SharedCodec492"]:c5(),["SharedCodec493"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCustomerTaxExemptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
