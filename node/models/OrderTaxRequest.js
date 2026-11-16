import { d6351 as c0 } from '../descriptors/data/291.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7258 as c1, d7261 as c3, d7262 as c4, d7263 as c5, d7264 as c6 } from '../descriptors/data/341.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5814 as c2 } from '../descriptors/data/259.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7265 as c7, d7266 as c8, d7267 as c9, d7268 as c10, d7269 as c11, d7270 as c12, d7271 as c13, d7272 as c14, d7273 as c15, d7274 as c16, d7275 as c17, d7276 as c18, d7277 as c19, d7278 as c20, d7279 as c21, d7280 as c22, d7281 as c23, d7282 as c24, d7283 as c25, d7284 as c26, d7285 as c27 } from '../descriptors/data/342.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6928 as c28 } from '../descriptors/data/325.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6186 as c29, d6187 as c30, d6188 as c31, d6189 as c32 } from '../descriptors/data/282.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7290 as c33, d7291 as c34 } from '../descriptors/data/343.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7268 as d7268 } from '../descriptors/data/342.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7268;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerTaxExemptionCoverageRequest"]:c0(),["DeliveryChargeTaxCalculationRequestModel"]:c1(),["MoneyValue"]:c2(),["OrderTaxCalculationRequest"]:c3(),["OrderTaxComponentRequest"]:c4(),["OrderTaxExemptionRequest"]:c5(),["OrderTaxJurisdictionRequest"]:c6(),["OrderTaxLocationFullAddressRequest"]:c7(),["OrderTaxLocationPostalAddressRequest"]:c8(),["OrderTaxLocationRequest"]:c9(),["OrderTaxRequest"]:c10(),["SharedCodec1094"]:c11(),["SharedCodec1095"]:c12(),["SharedCodec1096"]:c13(),["SharedCodec1097"]:c14(),["SharedCodec1098"]:c15(),["SharedCodec1099"]:c16(),["SharedCodec1100"]:c17(),["SharedCodec1101"]:c18(),["SharedCodec1102"]:c19(),["SharedCodec1103"]:c20(),["SharedCodec1104"]:c21(),["SharedCodec1105"]:c22(),["SharedCodec1106"]:c23(),["SharedCodec1107"]:c24(),["SharedCodec1108"]:c25(),["SharedCodec1109"]:c26(),["SharedCodec1110"]:c27(),["SharedCodec136"]:c28(),["SharedCodec492"]:c29(),["SharedCodec493"]:c30(),["SharedCodec494"]:c31(),["SharedCodec495"]:c32(),["TaxComponentRequestModel"]:c33(),["TaxJurisdictionRequestModel"]:c34()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
