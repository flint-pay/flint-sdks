import { d6323 as c0 } from '../descriptors/data/290.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d7230 as c1, d7233 as c3, d7234 as c4, d7235 as c5, d7236 as c6 } from '../descriptors/data/340.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5786 as c2 } from '../descriptors/data/258.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d7237 as c7, d7238 as c8, d7239 as c9, d7240 as c10, d7241 as c11, d7242 as c12, d7243 as c13, d7244 as c14, d7245 as c15, d7246 as c16, d7247 as c17, d7248 as c18, d7249 as c19, d7250 as c20, d7251 as c21, d7252 as c22, d7253 as c23, d7254 as c24, d7255 as c25, d7256 as c26, d7257 as c27 } from '../descriptors/data/341.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6900 as c28 } from '../descriptors/data/324.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6158 as c29, d6159 as c30, d6160 as c31, d6161 as c32 } from '../descriptors/data/281.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d7262 as c33, d7263 as c34 } from '../descriptors/data/342.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d7240 as d7240 } from '../descriptors/data/341.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7240;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerTaxExemptionCoverageRequest"]:c0(),["DeliveryChargeTaxCalculationRequestModel"]:c1(),["MoneyValue"]:c2(),["OrderTaxCalculationRequest"]:c3(),["OrderTaxComponentRequest"]:c4(),["OrderTaxExemptionRequest"]:c5(),["OrderTaxJurisdictionRequest"]:c6(),["OrderTaxLocationFullAddressRequest"]:c7(),["OrderTaxLocationPostalAddressRequest"]:c8(),["OrderTaxLocationRequest"]:c9(),["OrderTaxRequest"]:c10(),["SharedCodec1087"]:c11(),["SharedCodec1088"]:c12(),["SharedCodec1089"]:c13(),["SharedCodec1090"]:c14(),["SharedCodec1091"]:c15(),["SharedCodec1092"]:c16(),["SharedCodec1093"]:c17(),["SharedCodec1094"]:c18(),["SharedCodec1095"]:c19(),["SharedCodec1096"]:c20(),["SharedCodec1097"]:c21(),["SharedCodec1098"]:c22(),["SharedCodec1099"]:c23(),["SharedCodec1100"]:c24(),["SharedCodec1101"]:c25(),["SharedCodec1102"]:c26(),["SharedCodec1103"]:c27(),["SharedCodec136"]:c28(),["SharedCodec492"]:c29(),["SharedCodec493"]:c30(),["SharedCodec494"]:c31(),["SharedCodec495"]:c32(),["TaxComponentRequestModel"]:c33(),["TaxJurisdictionRequestModel"]:c34()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
