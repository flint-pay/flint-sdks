import { d8429 as c0 } from '../descriptors/data/370.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9329 as c1 } from '../descriptors/data/419.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7886 as c2 } from '../descriptors/data/338.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9333 as c3, d9334 as c4, d9335 as c5, d9336 as c6, d9337 as c7, d9338 as c8, d9339 as c9, d9340 as c10, d9341 as c11, d9342 as c12, d9343 as c13, d9344 as c14, d9345 as c15, d9346 as c16, d9347 as c17, d9348 as c18, d9349 as c19, d9350 as c20, d9351 as c21 } from '../descriptors/data/420.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9352 as c22, d9353 as c23, d9354 as c24, d9355 as c25, d9356 as c26, d9357 as c27, d9362 as c33, d9363 as c34 } from '../descriptors/data/421.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8995 as c28 } from '../descriptors/data/403.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8262 as c29, d8263 as c30, d8264 as c31, d8265 as c32 } from '../descriptors/data/361.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9340 as d9340 } from '../descriptors/data/420.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9340;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerTaxExemptionCoverageRequest"]:c0(),["DeliveryChargeTaxCalculationRequestModel"]:c1(),["MoneyValue"]:c2(),["OrderTaxCalculationRequest"]:c3(),["OrderTaxComponentRequest"]:c4(),["OrderTaxExemptionRequest"]:c5(),["OrderTaxJurisdictionRequest"]:c6(),["OrderTaxLocationFullAddressRequest"]:c7(),["OrderTaxLocationPostalAddressRequest"]:c8(),["OrderTaxLocationRequest"]:c9(),["OrderTaxRequest"]:c10(),["SharedCodec1971"]:c11(),["SharedCodec1972"]:c12(),["SharedCodec1973"]:c13(),["SharedCodec1974"]:c14(),["SharedCodec1975"]:c15(),["SharedCodec1976"]:c16(),["SharedCodec1980"]:c17(),["SharedCodec1981"]:c18(),["SharedCodec1982"]:c19(),["SharedCodec1983"]:c20(),["SharedCodec1984"]:c21(),["SharedCodec1987"]:c22(),["SharedCodec1988"]:c23(),["SharedCodec1996"]:c24(),["SharedCodec1997"]:c25(),["SharedCodec1998"]:c26(),["SharedCodec1999"]:c27(),["SharedCodec216"]:c28(),["SharedCodec684"]:c29(),["SharedCodec685"]:c30(),["SharedCodec686"]:c31(),["SharedCodec687"]:c32(),["TaxComponentRequestModel"]:c33(),["TaxJurisdictionRequestModel"]:c34()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
