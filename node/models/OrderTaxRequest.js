import { d6316 as c0 } from '../descriptors/data/287.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7230 as c1, d7233 as c3, d7234 as c4, d7235 as c5 } from '../descriptors/data/338.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5789 as c2 } from '../descriptors/data/256.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7236 as c6, d7237 as c7, d7238 as c8, d7239 as c9, d7240 as c10, d7241 as c11, d7242 as c12, d7243 as c13, d7244 as c14, d7245 as c15, d7246 as c16, d7247 as c17, d7248 as c18, d7249 as c19, d7250 as c20, d7251 as c21, d7252 as c22, d7253 as c23, d7254 as c24, d7255 as c25, d7256 as c26, d7257 as c27 } from '../descriptors/data/339.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6899 as c28 } from '../descriptors/data/322.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6161 as c29, d6162 as c30, d6163 as c31, d6164 as c32 } from '../descriptors/data/279.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7262 as c33, d7263 as c34 } from '../descriptors/data/340.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7240 as d7240 } from '../descriptors/data/339.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7240;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerTaxExemptionCoverageRequest"]:c0(),["DeliveryChargeTaxCalculationRequestModel"]:c1(),["MoneyValue"]:c2(),["OrderTaxCalculationRequest"]:c3(),["OrderTaxComponentRequest"]:c4(),["OrderTaxExemptionRequest"]:c5(),["OrderTaxJurisdictionRequest"]:c6(),["OrderTaxLocationFullAddressRequest"]:c7(),["OrderTaxLocationPostalAddressRequest"]:c8(),["OrderTaxLocationRequest"]:c9(),["OrderTaxRequest"]:c10(),["SharedCodec1096"]:c11(),["SharedCodec1097"]:c12(),["SharedCodec1098"]:c13(),["SharedCodec1099"]:c14(),["SharedCodec1100"]:c15(),["SharedCodec1101"]:c16(),["SharedCodec1102"]:c17(),["SharedCodec1103"]:c18(),["SharedCodec1104"]:c19(),["SharedCodec1105"]:c20(),["SharedCodec1106"]:c21(),["SharedCodec1107"]:c22(),["SharedCodec1108"]:c23(),["SharedCodec1109"]:c24(),["SharedCodec1110"]:c25(),["SharedCodec1111"]:c26(),["SharedCodec1112"]:c27(),["SharedCodec142"]:c28(),["SharedCodec490"]:c29(),["SharedCodec491"]:c30(),["SharedCodec492"]:c31(),["SharedCodec493"]:c32(),["TaxComponentRequestModel"]:c33(),["TaxJurisdictionRequestModel"]:c34()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
