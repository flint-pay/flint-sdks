import { d8473 as c0 } from '../descriptors/data/376.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d7928 as c1 } from '../descriptors/data/343.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9919 as c2, d9927 as c3, d9929 as c11 } from '../descriptors/data/460.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9388 as c4, d9389 as c5, d9390 as c6, d9391 as c7, d9392 as c8, d9393 as c9, d9394 as c10 } from '../descriptors/data/426.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9396 as c12, d9397 as c13, d9398 as c14, d9399 as c15, d9400 as c16, d9401 as c17, d9402 as c18, d9403 as c19, d9404 as c20, d9405 as c21, d9406 as c22, d9407 as c23, d9408 as c24, d9417 as c37, d9418 as c38 } from '../descriptors/data/427.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9937 as c25, d9938 as c26, d9939 as c27, d9940 as c28, d9941 as c29, d9942 as c30 } from '../descriptors/data/461.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9042 as c31 } from '../descriptors/data/409.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8308 as c32, d8309 as c33, d8310 as c34, d8311 as c35 } from '../descriptors/data/367.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d10013 as c36 } from '../descriptors/data/464.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9929 as d9929 } from '../descriptors/data/460.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9929;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerTaxExemptionCoverageRequest"]:c0(),["MoneyValue"]:c1(),["OrderChargeTaxAssignment"]:c2(),["OrderLineItemTaxAssignment"]:c3(),["OrderTaxCalculationRequest"]:c4(),["OrderTaxComponentRequest"]:c5(),["OrderTaxExemptionRequest"]:c6(),["OrderTaxJurisdictionRequest"]:c7(),["OrderTaxLocationFullAddressRequest"]:c8(),["OrderTaxLocationPostalAddressRequest"]:c9(),["OrderTaxLocationRequest"]:c10(),["OrderTaxUpdateRequest"]:c11(),["SharedCodec1971"]:c12(),["SharedCodec1972"]:c13(),["SharedCodec1973"]:c14(),["SharedCodec1974"]:c15(),["SharedCodec1975"]:c16(),["SharedCodec1976"]:c17(),["SharedCodec1980"]:c18(),["SharedCodec1981"]:c19(),["SharedCodec1982"]:c20(),["SharedCodec1983"]:c21(),["SharedCodec1984"]:c22(),["SharedCodec1987"]:c23(),["SharedCodec1988"]:c24(),["SharedCodec2000"]:c25(),["SharedCodec2001"]:c26(),["SharedCodec2002"]:c27(),["SharedCodec2003"]:c28(),["SharedCodec2004"]:c29(),["SharedCodec2005"]:c30(),["SharedCodec217"]:c31(),["SharedCodec689"]:c32(),["SharedCodec690"]:c33(),["SharedCodec691"]:c34(),["SharedCodec692"]:c35(),["TaxCalculationRequestModel"]:c36(),["TaxComponentRequestModel"]:c37(),["TaxJurisdictionRequestModel"]:c38()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxUpdateRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
