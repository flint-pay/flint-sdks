import { d8473 as c0 } from '../descriptors/data/376.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9384 as c1, d9388 as c3, d9389 as c4, d9390 as c5, d9391 as c6, d9392 as c7, d9393 as c8, d9394 as c9, d9395 as c10 } from '../descriptors/data/426.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d7928 as c2 } from '../descriptors/data/343.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9396 as c11, d9397 as c12, d9398 as c13, d9399 as c14, d9400 as c15, d9401 as c16, d9402 as c17, d9403 as c18, d9404 as c19, d9405 as c20, d9406 as c21, d9407 as c22, d9408 as c23, d9409 as c24, d9410 as c25, d9411 as c26, d9412 as c27, d9417 as c33, d9418 as c34 } from '../descriptors/data/427.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9042 as c28 } from '../descriptors/data/409.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8308 as c29, d8309 as c30, d8310 as c31, d8311 as c32 } from '../descriptors/data/367.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9395 as d9395 } from '../descriptors/data/426.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9395;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerTaxExemptionCoverageRequest"]:c0(),["DeliveryChargeTaxCalculationRequestModel"]:c1(),["MoneyValue"]:c2(),["OrderTaxCalculationRequest"]:c3(),["OrderTaxComponentRequest"]:c4(),["OrderTaxExemptionRequest"]:c5(),["OrderTaxJurisdictionRequest"]:c6(),["OrderTaxLocationFullAddressRequest"]:c7(),["OrderTaxLocationPostalAddressRequest"]:c8(),["OrderTaxLocationRequest"]:c9(),["OrderTaxRequest"]:c10(),["SharedCodec1971"]:c11(),["SharedCodec1972"]:c12(),["SharedCodec1973"]:c13(),["SharedCodec1974"]:c14(),["SharedCodec1975"]:c15(),["SharedCodec1976"]:c16(),["SharedCodec1980"]:c17(),["SharedCodec1981"]:c18(),["SharedCodec1982"]:c19(),["SharedCodec1983"]:c20(),["SharedCodec1984"]:c21(),["SharedCodec1987"]:c22(),["SharedCodec1988"]:c23(),["SharedCodec1996"]:c24(),["SharedCodec1997"]:c25(),["SharedCodec1998"]:c26(),["SharedCodec1999"]:c27(),["SharedCodec217"]:c28(),["SharedCodec689"]:c29(),["SharedCodec690"]:c30(),["SharedCodec691"]:c31(),["SharedCodec692"]:c32(),["TaxComponentRequestModel"]:c33(),["TaxJurisdictionRequestModel"]:c34()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
