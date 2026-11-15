import { d6323 as c0 } from '../descriptors/data/290.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5786 as c1 } from '../descriptors/data/258.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d7709 as c2, d7717 as c3, d7719 as c11 } from '../descriptors/data/370.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d7233 as c4, d7234 as c5, d7235 as c6, d7236 as c7 } from '../descriptors/data/340.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d7237 as c8, d7238 as c9, d7239 as c10, d7241 as c12, d7242 as c13, d7243 as c14, d7244 as c15, d7245 as c16, d7246 as c17, d7247 as c18, d7248 as c19, d7249 as c20, d7250 as c21, d7251 as c22, d7252 as c23, d7253 as c24 } from '../descriptors/data/341.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d7727 as c25, d7728 as c26, d7729 as c27, d7730 as c28, d7731 as c29, d7732 as c30 } from '../descriptors/data/371.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6900 as c31 } from '../descriptors/data/324.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6158 as c32, d6159 as c33, d6160 as c34, d6161 as c35 } from '../descriptors/data/281.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d7801 as c36 } from '../descriptors/data/374.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d7262 as c37, d7263 as c38 } from '../descriptors/data/342.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d7719 as d7719 } from '../descriptors/data/370.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7719;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerTaxExemptionCoverageRequest"]:c0(),["MoneyValue"]:c1(),["OrderChargeTaxAssignment"]:c2(),["OrderLineItemTaxAssignment"]:c3(),["OrderTaxCalculationRequest"]:c4(),["OrderTaxComponentRequest"]:c5(),["OrderTaxExemptionRequest"]:c6(),["OrderTaxJurisdictionRequest"]:c7(),["OrderTaxLocationFullAddressRequest"]:c8(),["OrderTaxLocationPostalAddressRequest"]:c9(),["OrderTaxLocationRequest"]:c10(),["OrderTaxUpdateRequest"]:c11(),["SharedCodec1087"]:c12(),["SharedCodec1088"]:c13(),["SharedCodec1089"]:c14(),["SharedCodec1090"]:c15(),["SharedCodec1091"]:c16(),["SharedCodec1092"]:c17(),["SharedCodec1093"]:c18(),["SharedCodec1094"]:c19(),["SharedCodec1095"]:c20(),["SharedCodec1096"]:c21(),["SharedCodec1097"]:c22(),["SharedCodec1098"]:c23(),["SharedCodec1099"]:c24(),["SharedCodec1104"]:c25(),["SharedCodec1105"]:c26(),["SharedCodec1106"]:c27(),["SharedCodec1107"]:c28(),["SharedCodec1108"]:c29(),["SharedCodec1109"]:c30(),["SharedCodec136"]:c31(),["SharedCodec492"]:c32(),["SharedCodec493"]:c33(),["SharedCodec494"]:c34(),["SharedCodec495"]:c35(),["TaxCalculationRequestModel"]:c36(),["TaxComponentRequestModel"]:c37(),["TaxJurisdictionRequestModel"]:c38()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxUpdateRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
