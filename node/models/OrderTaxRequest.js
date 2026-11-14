import { d6317 as c0 } from '../descriptors/data/290.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7231 as c1, d7234 as c3, d7235 as c4, d7236 as c5 } from '../descriptors/data/341.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5790 as c2 } from '../descriptors/data/259.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7237 as c6, d7238 as c7, d7239 as c8, d7240 as c9, d7241 as c10, d7242 as c11, d7243 as c12, d7244 as c13, d7245 as c14, d7246 as c15, d7247 as c16, d7248 as c17, d7249 as c18, d7250 as c19, d7251 as c20, d7252 as c21, d7253 as c22, d7254 as c23, d7255 as c24, d7256 as c25, d7257 as c26, d7258 as c27 } from '../descriptors/data/342.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6900 as c28 } from '../descriptors/data/325.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6162 as c29, d6163 as c30, d6164 as c31, d6165 as c32 } from '../descriptors/data/282.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7263 as c33, d7264 as c34 } from '../descriptors/data/343.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7241 as d7241 } from '../descriptors/data/342.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7241;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerTaxExemptionCoverageRequest"]:c0(),["DeliveryChargeTaxCalculationRequestModel"]:c1(),["MoneyValue"]:c2(),["OrderTaxCalculationRequest"]:c3(),["OrderTaxComponentRequest"]:c4(),["OrderTaxExemptionRequest"]:c5(),["OrderTaxJurisdictionRequest"]:c6(),["OrderTaxLocationFullAddressRequest"]:c7(),["OrderTaxLocationPostalAddressRequest"]:c8(),["OrderTaxLocationRequest"]:c9(),["OrderTaxRequest"]:c10(),["SharedCodec1096"]:c11(),["SharedCodec1097"]:c12(),["SharedCodec1098"]:c13(),["SharedCodec1099"]:c14(),["SharedCodec1100"]:c15(),["SharedCodec1101"]:c16(),["SharedCodec1102"]:c17(),["SharedCodec1103"]:c18(),["SharedCodec1104"]:c19(),["SharedCodec1105"]:c20(),["SharedCodec1106"]:c21(),["SharedCodec1107"]:c22(),["SharedCodec1108"]:c23(),["SharedCodec1109"]:c24(),["SharedCodec1110"]:c25(),["SharedCodec1111"]:c26(),["SharedCodec1112"]:c27(),["SharedCodec141"]:c28(),["SharedCodec494"]:c29(),["SharedCodec495"]:c30(),["SharedCodec496"]:c31(),["SharedCodec497"]:c32(),["TaxComponentRequestModel"]:c33(),["TaxJurisdictionRequestModel"]:c34()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
