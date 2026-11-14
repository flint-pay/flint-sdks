import { d6317 as c0 } from '../descriptors/data/290.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5790 as c1 } from '../descriptors/data/259.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7709 as c2 } from '../descriptors/data/371.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7717 as c3, d7719 as c11, d7733 as c25, d7734 as c26, d7735 as c27 } from '../descriptors/data/372.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7234 as c4, d7235 as c5, d7236 as c6 } from '../descriptors/data/341.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7237 as c7, d7238 as c8, d7239 as c9, d7240 as c10, d7242 as c12, d7243 as c13, d7244 as c14, d7245 as c15, d7246 as c16, d7247 as c17, d7248 as c18, d7249 as c19, d7250 as c20, d7251 as c21, d7252 as c22, d7253 as c23, d7254 as c24 } from '../descriptors/data/342.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7736 as c28, d7737 as c29, d7738 as c30 } from '../descriptors/data/373.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6900 as c31 } from '../descriptors/data/325.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6162 as c32, d6163 as c33, d6164 as c34, d6165 as c35 } from '../descriptors/data/282.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7812 as c36 } from '../descriptors/data/376.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7263 as c37, d7264 as c38 } from '../descriptors/data/343.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7719 as d7719 } from '../descriptors/data/372.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7719;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerTaxExemptionCoverageRequest"]:c0(),["MoneyValue"]:c1(),["OrderChargeTaxAssignment"]:c2(),["OrderLineItemTaxAssignment"]:c3(),["OrderTaxCalculationRequest"]:c4(),["OrderTaxComponentRequest"]:c5(),["OrderTaxExemptionRequest"]:c6(),["OrderTaxJurisdictionRequest"]:c7(),["OrderTaxLocationFullAddressRequest"]:c8(),["OrderTaxLocationPostalAddressRequest"]:c9(),["OrderTaxLocationRequest"]:c10(),["OrderTaxUpdateRequest"]:c11(),["SharedCodec1096"]:c12(),["SharedCodec1097"]:c13(),["SharedCodec1098"]:c14(),["SharedCodec1099"]:c15(),["SharedCodec1100"]:c16(),["SharedCodec1101"]:c17(),["SharedCodec1102"]:c18(),["SharedCodec1103"]:c19(),["SharedCodec1104"]:c20(),["SharedCodec1105"]:c21(),["SharedCodec1106"]:c22(),["SharedCodec1107"]:c23(),["SharedCodec1108"]:c24(),["SharedCodec1113"]:c25(),["SharedCodec1114"]:c26(),["SharedCodec1115"]:c27(),["SharedCodec1116"]:c28(),["SharedCodec1117"]:c29(),["SharedCodec1118"]:c30(),["SharedCodec141"]:c31(),["SharedCodec494"]:c32(),["SharedCodec495"]:c33(),["SharedCodec496"]:c34(),["SharedCodec497"]:c35(),["TaxCalculationRequestModel"]:c36(),["TaxComponentRequestModel"]:c37(),["TaxJurisdictionRequestModel"]:c38()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxUpdateRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
