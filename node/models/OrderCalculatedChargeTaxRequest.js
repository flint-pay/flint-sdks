import { d5789 as c0 } from '../descriptors/data/256.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7705 as c1 } from '../descriptors/data/368.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7815 as c2, d7816 as c3, d7817 as c4 } from '../descriptors/data/373.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7705 as d7705 } from '../descriptors/data/368.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7705;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderCalculatedChargeTaxRequest"]:c1(),["TaxCalculationRequestRequest"]:c2(),["TaxComponentRequestRequest"]:c3(),["TaxJurisdictionRequest"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderCalculatedChargeTaxRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
