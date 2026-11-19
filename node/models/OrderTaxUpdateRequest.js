import { d8429 as c0 } from '../descriptors/data/370.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7886 as c1 } from '../descriptors/data/338.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9862 as c2 } from '../descriptors/data/453.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9870 as c3, d9872 as c11, d9880 as c25, d9881 as c26, d9882 as c27, d9883 as c28, d9884 as c29, d9885 as c30 } from '../descriptors/data/454.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9333 as c4, d9334 as c5, d9335 as c6, d9336 as c7, d9337 as c8, d9338 as c9, d9339 as c10, d9341 as c12, d9342 as c13, d9343 as c14, d9344 as c15, d9345 as c16, d9346 as c17, d9347 as c18, d9348 as c19, d9349 as c20, d9350 as c21, d9351 as c22 } from '../descriptors/data/420.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9352 as c23, d9353 as c24, d9362 as c37, d9363 as c38 } from '../descriptors/data/421.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8995 as c31 } from '../descriptors/data/403.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8262 as c32, d8263 as c33, d8264 as c34, d8265 as c35 } from '../descriptors/data/361.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9956 as c36 } from '../descriptors/data/457.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9872 as d9872 } from '../descriptors/data/454.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9872;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerTaxExemptionCoverageRequest"]:c0(),["MoneyValue"]:c1(),["OrderChargeTaxAssignment"]:c2(),["OrderLineItemTaxAssignment"]:c3(),["OrderTaxCalculationRequest"]:c4(),["OrderTaxComponentRequest"]:c5(),["OrderTaxExemptionRequest"]:c6(),["OrderTaxJurisdictionRequest"]:c7(),["OrderTaxLocationFullAddressRequest"]:c8(),["OrderTaxLocationPostalAddressRequest"]:c9(),["OrderTaxLocationRequest"]:c10(),["OrderTaxUpdateRequest"]:c11(),["SharedCodec1971"]:c12(),["SharedCodec1972"]:c13(),["SharedCodec1973"]:c14(),["SharedCodec1974"]:c15(),["SharedCodec1975"]:c16(),["SharedCodec1976"]:c17(),["SharedCodec1980"]:c18(),["SharedCodec1981"]:c19(),["SharedCodec1982"]:c20(),["SharedCodec1983"]:c21(),["SharedCodec1984"]:c22(),["SharedCodec1987"]:c23(),["SharedCodec1988"]:c24(),["SharedCodec2000"]:c25(),["SharedCodec2001"]:c26(),["SharedCodec2002"]:c27(),["SharedCodec2003"]:c28(),["SharedCodec2004"]:c29(),["SharedCodec2005"]:c30(),["SharedCodec216"]:c31(),["SharedCodec684"]:c32(),["SharedCodec685"]:c33(),["SharedCodec686"]:c34(),["SharedCodec687"]:c35(),["TaxCalculationRequestModel"]:c36(),["TaxComponentRequestModel"]:c37(),["TaxJurisdictionRequestModel"]:c38()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxUpdateRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
