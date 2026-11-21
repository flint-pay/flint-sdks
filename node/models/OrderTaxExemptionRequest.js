import { d8473 as c0 } from '../descriptors/data/376.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9390 as c1 } from '../descriptors/data/426.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9398 as c2, d9399 as c3, d9400 as c4, d9401 as c5, d9402 as c6, d9403 as c7, d9404 as c8 } from '../descriptors/data/427.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8308 as c9, d8309 as c10, d8310 as c11, d8311 as c12 } from '../descriptors/data/367.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9390 as d9390 } from '../descriptors/data/426.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9390;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerTaxExemptionCoverageRequest"]:c0(),["OrderTaxExemptionRequest"]:c1(),["SharedCodec1973"]:c2(),["SharedCodec1974"]:c3(),["SharedCodec1975"]:c4(),["SharedCodec1976"]:c5(),["SharedCodec1980"]:c6(),["SharedCodec1981"]:c7(),["SharedCodec1982"]:c8(),["SharedCodec689"]:c9(),["SharedCodec690"]:c10(),["SharedCodec691"]:c11(),["SharedCodec692"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxExemptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
