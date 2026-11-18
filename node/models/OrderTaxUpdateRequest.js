import { d8428 as c0 } from '../descriptors/data/370.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7885 as c1 } from '../descriptors/data/338.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9859 as c2 } from '../descriptors/data/452.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9867 as c3, d9869 as c11 } from '../descriptors/data/453.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9332 as c4, d9333 as c5, d9334 as c6, d9335 as c7, d9336 as c8, d9337 as c9, d9338 as c10, d9340 as c12, d9341 as c13, d9342 as c14, d9343 as c15, d9344 as c16, d9345 as c17, d9346 as c18, d9347 as c19, d9348 as c20, d9349 as c21, d9350 as c22 } from '../descriptors/data/420.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9351 as c23, d9352 as c24, d9361 as c37, d9362 as c38 } from '../descriptors/data/421.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9877 as c25, d9878 as c26, d9879 as c27, d9880 as c28, d9881 as c29, d9882 as c30 } from '../descriptors/data/454.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8994 as c31 } from '../descriptors/data/403.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8261 as c32, d8262 as c33, d8263 as c34, d8264 as c35 } from '../descriptors/data/361.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9953 as c36 } from '../descriptors/data/457.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9869 as d9869 } from '../descriptors/data/453.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9869;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerTaxExemptionCoverageRequest"]:c0(),["MoneyValue"]:c1(),["OrderChargeTaxAssignment"]:c2(),["OrderLineItemTaxAssignment"]:c3(),["OrderTaxCalculationRequest"]:c4(),["OrderTaxComponentRequest"]:c5(),["OrderTaxExemptionRequest"]:c6(),["OrderTaxJurisdictionRequest"]:c7(),["OrderTaxLocationFullAddressRequest"]:c8(),["OrderTaxLocationPostalAddressRequest"]:c9(),["OrderTaxLocationRequest"]:c10(),["OrderTaxUpdateRequest"]:c11(),["SharedCodec1970"]:c12(),["SharedCodec1971"]:c13(),["SharedCodec1972"]:c14(),["SharedCodec1973"]:c15(),["SharedCodec1974"]:c16(),["SharedCodec1975"]:c17(),["SharedCodec1979"]:c18(),["SharedCodec1980"]:c19(),["SharedCodec1981"]:c20(),["SharedCodec1982"]:c21(),["SharedCodec1983"]:c22(),["SharedCodec1986"]:c23(),["SharedCodec1987"]:c24(),["SharedCodec1999"]:c25(),["SharedCodec2000"]:c26(),["SharedCodec2001"]:c27(),["SharedCodec2002"]:c28(),["SharedCodec2003"]:c29(),["SharedCodec2004"]:c30(),["SharedCodec216"]:c31(),["SharedCodec682"]:c32(),["SharedCodec683"]:c33(),["SharedCodec684"]:c34(),["SharedCodec685"]:c35(),["TaxCalculationRequestModel"]:c36(),["TaxComponentRequestModel"]:c37(),["TaxJurisdictionRequestModel"]:c38()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxUpdateRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
