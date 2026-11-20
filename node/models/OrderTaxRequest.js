import { d8463 as c0 } from '../descriptors/data/376.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9372 as c1, d9376 as c3, d9377 as c4, d9378 as c5, d9379 as c6, d9380 as c7, d9381 as c8, d9382 as c9, d9383 as c10 } from '../descriptors/data/426.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d7920 as c2 } from '../descriptors/data/343.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9384 as c11, d9385 as c12, d9386 as c13, d9387 as c14, d9388 as c15, d9389 as c16, d9390 as c17, d9391 as c18, d9392 as c19, d9393 as c20, d9394 as c21, d9395 as c22, d9396 as c23, d9397 as c24, d9398 as c25, d9399 as c26, d9400 as c27, d9405 as c33, d9406 as c34 } from '../descriptors/data/427.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9030 as c28 } from '../descriptors/data/409.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8298 as c29, d8299 as c30, d8300 as c31, d8301 as c32 } from '../descriptors/data/367.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9383 as d9383 } from '../descriptors/data/426.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9383;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerTaxExemptionCoverageRequest"]:c0(),["DeliveryChargeTaxCalculationRequestModel"]:c1(),["MoneyValue"]:c2(),["OrderTaxCalculationRequest"]:c3(),["OrderTaxComponentRequest"]:c4(),["OrderTaxExemptionRequest"]:c5(),["OrderTaxJurisdictionRequest"]:c6(),["OrderTaxLocationFullAddressRequest"]:c7(),["OrderTaxLocationPostalAddressRequest"]:c8(),["OrderTaxLocationRequest"]:c9(),["OrderTaxRequest"]:c10(),["SharedCodec1966"]:c11(),["SharedCodec1967"]:c12(),["SharedCodec1968"]:c13(),["SharedCodec1969"]:c14(),["SharedCodec1970"]:c15(),["SharedCodec1971"]:c16(),["SharedCodec1975"]:c17(),["SharedCodec1976"]:c18(),["SharedCodec1977"]:c19(),["SharedCodec1978"]:c20(),["SharedCodec1979"]:c21(),["SharedCodec1982"]:c22(),["SharedCodec1983"]:c23(),["SharedCodec1991"]:c24(),["SharedCodec1992"]:c25(),["SharedCodec1993"]:c26(),["SharedCodec1994"]:c27(),["SharedCodec216"]:c28(),["SharedCodec685"]:c29(),["SharedCodec686"]:c30(),["SharedCodec687"]:c31(),["SharedCodec688"]:c32(),["TaxComponentRequestModel"]:c33(),["TaxJurisdictionRequestModel"]:c34()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
