import { d8463 as c0 } from '../descriptors/data/376.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d7920 as c1 } from '../descriptors/data/343.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9907 as c2 } from '../descriptors/data/460.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9915 as c3, d9917 as c11, d9925 as c25, d9926 as c26, d9927 as c27, d9928 as c28, d9929 as c29, d9930 as c30 } from '../descriptors/data/461.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9376 as c4, d9377 as c5, d9378 as c6, d9379 as c7, d9380 as c8, d9381 as c9, d9382 as c10 } from '../descriptors/data/426.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9384 as c12, d9385 as c13, d9386 as c14, d9387 as c15, d9388 as c16, d9389 as c17, d9390 as c18, d9391 as c19, d9392 as c20, d9393 as c21, d9394 as c22, d9395 as c23, d9396 as c24, d9405 as c37, d9406 as c38 } from '../descriptors/data/427.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9030 as c31 } from '../descriptors/data/409.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8298 as c32, d8299 as c33, d8300 as c34, d8301 as c35 } from '../descriptors/data/367.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10001 as c36 } from '../descriptors/data/465.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9917 as d9917 } from '../descriptors/data/461.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9917;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerTaxExemptionCoverageRequest"]:c0(),["MoneyValue"]:c1(),["OrderChargeTaxAssignment"]:c2(),["OrderLineItemTaxAssignment"]:c3(),["OrderTaxCalculationRequest"]:c4(),["OrderTaxComponentRequest"]:c5(),["OrderTaxExemptionRequest"]:c6(),["OrderTaxJurisdictionRequest"]:c7(),["OrderTaxLocationFullAddressRequest"]:c8(),["OrderTaxLocationPostalAddressRequest"]:c9(),["OrderTaxLocationRequest"]:c10(),["OrderTaxUpdateRequest"]:c11(),["SharedCodec1966"]:c12(),["SharedCodec1967"]:c13(),["SharedCodec1968"]:c14(),["SharedCodec1969"]:c15(),["SharedCodec1970"]:c16(),["SharedCodec1971"]:c17(),["SharedCodec1975"]:c18(),["SharedCodec1976"]:c19(),["SharedCodec1977"]:c20(),["SharedCodec1978"]:c21(),["SharedCodec1979"]:c22(),["SharedCodec1982"]:c23(),["SharedCodec1983"]:c24(),["SharedCodec1995"]:c25(),["SharedCodec1996"]:c26(),["SharedCodec1997"]:c27(),["SharedCodec1998"]:c28(),["SharedCodec1999"]:c29(),["SharedCodec2000"]:c30(),["SharedCodec216"]:c31(),["SharedCodec685"]:c32(),["SharedCodec686"]:c33(),["SharedCodec687"]:c34(),["SharedCodec688"]:c35(),["TaxCalculationRequestModel"]:c36(),["TaxComponentRequestModel"]:c37(),["TaxJurisdictionRequestModel"]:c38()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxUpdateRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
