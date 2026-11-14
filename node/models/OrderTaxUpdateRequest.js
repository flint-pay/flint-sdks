import { d6316 as c0 } from '../descriptors/data/287.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5789 as c1 } from '../descriptors/data/256.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7708 as c2 } from '../descriptors/data/368.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7716 as c3, d7720 as c11, d7734 as c25, d7735 as c26 } from '../descriptors/data/369.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7233 as c4, d7234 as c5, d7235 as c6 } from '../descriptors/data/338.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7236 as c7, d7237 as c8, d7238 as c9, d7239 as c10, d7241 as c12, d7242 as c13, d7243 as c14, d7244 as c15, d7245 as c16, d7246 as c17, d7247 as c18, d7248 as c19, d7249 as c20, d7250 as c21, d7251 as c22, d7252 as c23, d7253 as c24 } from '../descriptors/data/339.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7736 as c27, d7737 as c28, d7738 as c29, d7739 as c30 } from '../descriptors/data/370.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6899 as c31 } from '../descriptors/data/322.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6161 as c32, d6162 as c33, d6163 as c34, d6164 as c35 } from '../descriptors/data/279.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7814 as c36 } from '../descriptors/data/373.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7262 as c37, d7263 as c38 } from '../descriptors/data/340.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7720 as d7720 } from '../descriptors/data/369.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7720;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerTaxExemptionCoverageRequest"]:c0(),["MoneyValue"]:c1(),["OrderChargeTaxAssignment"]:c2(),["OrderLineItemTaxAssignment"]:c3(),["OrderTaxCalculationRequest"]:c4(),["OrderTaxComponentRequest"]:c5(),["OrderTaxExemptionRequest"]:c6(),["OrderTaxJurisdictionRequest"]:c7(),["OrderTaxLocationFullAddressRequest"]:c8(),["OrderTaxLocationPostalAddressRequest"]:c9(),["OrderTaxLocationRequest"]:c10(),["OrderTaxUpdateRequest"]:c11(),["SharedCodec1096"]:c12(),["SharedCodec1097"]:c13(),["SharedCodec1098"]:c14(),["SharedCodec1099"]:c15(),["SharedCodec1100"]:c16(),["SharedCodec1101"]:c17(),["SharedCodec1102"]:c18(),["SharedCodec1103"]:c19(),["SharedCodec1104"]:c20(),["SharedCodec1105"]:c21(),["SharedCodec1106"]:c22(),["SharedCodec1107"]:c23(),["SharedCodec1108"]:c24(),["SharedCodec1113"]:c25(),["SharedCodec1114"]:c26(),["SharedCodec1115"]:c27(),["SharedCodec1116"]:c28(),["SharedCodec1117"]:c29(),["SharedCodec1118"]:c30(),["SharedCodec142"]:c31(),["SharedCodec490"]:c32(),["SharedCodec491"]:c33(),["SharedCodec492"]:c34(),["SharedCodec493"]:c35(),["TaxCalculationRequestModel"]:c36(),["TaxComponentRequestModel"]:c37(),["TaxJurisdictionRequestModel"]:c38()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxUpdateRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
