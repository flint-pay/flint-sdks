import { d9 as c0 } from '../descriptors/data/0.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5918 as c1 } from '../descriptors/data/265.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5789 as c2 } from '../descriptors/data/256.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7705 as c3, d7707 as c4 } from '../descriptors/data/368.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7725 as c5, d7726 as c6 } from '../descriptors/data/369.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7259 as c7, d7261 as c8 } from '../descriptors/data/340.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7815 as c9, d7816 as c10, d7817 as c11 } from '../descriptors/data/373.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d9 as d9 } from '../descriptors/data/0.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddOrderChargeRequest"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["OrderCalculatedChargeTaxRequest"]:c3(),["OrderChargeRequest"]:c4(),["SharedCodec1063"]:c5(),["SharedCodec1064"]:c6(),["SharedCodec361"]:c7(),["SharedCodec363"]:c8(),["TaxCalculationRequestRequest"]:c9(),["TaxComponentRequestRequest"]:c10(),["TaxJurisdictionRequest"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeAddOrderChargeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
