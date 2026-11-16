import { d6351 as c0 } from '../descriptors/data/291.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5814 as c1 } from '../descriptors/data/259.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7738 as c2, d7746 as c3, d7748 as c11 } from '../descriptors/data/371.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7261 as c4, d7262 as c5, d7263 as c6, d7264 as c7 } from '../descriptors/data/341.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7265 as c8, d7266 as c9, d7267 as c10, d7269 as c12, d7270 as c13, d7271 as c14, d7272 as c15, d7273 as c16, d7274 as c17, d7275 as c18, d7276 as c19, d7277 as c20, d7278 as c21, d7279 as c22, d7280 as c23, d7281 as c24 } from '../descriptors/data/342.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7756 as c25, d7757 as c26, d7758 as c27, d7759 as c28, d7760 as c29, d7761 as c30 } from '../descriptors/data/372.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6928 as c31 } from '../descriptors/data/325.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6186 as c32, d6187 as c33, d6188 as c34, d6189 as c35 } from '../descriptors/data/282.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7832 as c36 } from '../descriptors/data/375.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7290 as c37, d7291 as c38 } from '../descriptors/data/343.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7748 as d7748 } from '../descriptors/data/371.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7748;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerTaxExemptionCoverageRequest"]:c0(),["MoneyValue"]:c1(),["OrderChargeTaxAssignment"]:c2(),["OrderLineItemTaxAssignment"]:c3(),["OrderTaxCalculationRequest"]:c4(),["OrderTaxComponentRequest"]:c5(),["OrderTaxExemptionRequest"]:c6(),["OrderTaxJurisdictionRequest"]:c7(),["OrderTaxLocationFullAddressRequest"]:c8(),["OrderTaxLocationPostalAddressRequest"]:c9(),["OrderTaxLocationRequest"]:c10(),["OrderTaxUpdateRequest"]:c11(),["SharedCodec1094"]:c12(),["SharedCodec1095"]:c13(),["SharedCodec1096"]:c14(),["SharedCodec1097"]:c15(),["SharedCodec1098"]:c16(),["SharedCodec1099"]:c17(),["SharedCodec1100"]:c18(),["SharedCodec1101"]:c19(),["SharedCodec1102"]:c20(),["SharedCodec1103"]:c21(),["SharedCodec1104"]:c22(),["SharedCodec1105"]:c23(),["SharedCodec1106"]:c24(),["SharedCodec1111"]:c25(),["SharedCodec1112"]:c26(),["SharedCodec1113"]:c27(),["SharedCodec1114"]:c28(),["SharedCodec1115"]:c29(),["SharedCodec1116"]:c30(),["SharedCodec136"]:c31(),["SharedCodec492"]:c32(),["SharedCodec493"]:c33(),["SharedCodec494"]:c34(),["SharedCodec495"]:c35(),["TaxCalculationRequestModel"]:c36(),["TaxComponentRequestModel"]:c37(),["TaxJurisdictionRequestModel"]:c38()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxUpdateRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
