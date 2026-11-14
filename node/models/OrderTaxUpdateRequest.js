import { d6319 as c0 } from '../descriptors/data/289.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5784 as c1 } from '../descriptors/data/258.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d7706 as c2, d7714 as c3, d7716 as c11 } from '../descriptors/data/370.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d7231 as c4, d7232 as c5, d7233 as c6, d7234 as c7 } from '../descriptors/data/340.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d7235 as c8, d7236 as c9, d7237 as c10, d7239 as c12, d7240 as c13, d7241 as c14, d7242 as c15, d7243 as c16, d7244 as c17, d7245 as c18, d7246 as c19, d7247 as c20, d7248 as c21, d7249 as c22, d7250 as c23, d7251 as c24 } from '../descriptors/data/341.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d7724 as c25, d7725 as c26, d7726 as c27, d7727 as c28, d7728 as c29, d7729 as c30 } from '../descriptors/data/371.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6898 as c31 } from '../descriptors/data/324.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6156 as c32, d6157 as c33, d6158 as c34, d6159 as c35 } from '../descriptors/data/281.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d7798 as c36 } from '../descriptors/data/374.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d7260 as c37, d7261 as c38 } from '../descriptors/data/342.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d7716 as d7716 } from '../descriptors/data/370.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7716;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerTaxExemptionCoverageRequest"]:c0(),["MoneyValue"]:c1(),["OrderChargeTaxAssignment"]:c2(),["OrderLineItemTaxAssignment"]:c3(),["OrderTaxCalculationRequest"]:c4(),["OrderTaxComponentRequest"]:c5(),["OrderTaxExemptionRequest"]:c6(),["OrderTaxJurisdictionRequest"]:c7(),["OrderTaxLocationFullAddressRequest"]:c8(),["OrderTaxLocationPostalAddressRequest"]:c9(),["OrderTaxLocationRequest"]:c10(),["OrderTaxUpdateRequest"]:c11(),["SharedCodec1087"]:c12(),["SharedCodec1088"]:c13(),["SharedCodec1089"]:c14(),["SharedCodec1090"]:c15(),["SharedCodec1091"]:c16(),["SharedCodec1092"]:c17(),["SharedCodec1093"]:c18(),["SharedCodec1094"]:c19(),["SharedCodec1095"]:c20(),["SharedCodec1096"]:c21(),["SharedCodec1097"]:c22(),["SharedCodec1098"]:c23(),["SharedCodec1099"]:c24(),["SharedCodec1104"]:c25(),["SharedCodec1105"]:c26(),["SharedCodec1106"]:c27(),["SharedCodec1107"]:c28(),["SharedCodec1108"]:c29(),["SharedCodec1109"]:c30(),["SharedCodec136"]:c31(),["SharedCodec492"]:c32(),["SharedCodec493"]:c33(),["SharedCodec494"]:c34(),["SharedCodec495"]:c35(),["TaxCalculationRequestModel"]:c36(),["TaxComponentRequestModel"]:c37(),["TaxJurisdictionRequestModel"]:c38()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxUpdateRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
