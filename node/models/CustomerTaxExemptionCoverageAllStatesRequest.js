import { d504 as c0 } from '../descriptors/data/29.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8308 as c1, d8310 as c2 } from '../descriptors/data/367.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d504 as d504 } from '../descriptors/data/29.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d504;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerTaxExemptionCoverageAllStatesRequest"]:c0(),["SharedCodec689"]:c1(),["SharedCodec691"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCustomerTaxExemptionCoverageAllStatesRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
