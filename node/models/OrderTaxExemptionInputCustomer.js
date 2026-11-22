import { d1381 as c0 } from '../descriptors/data/68.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9398 as c1, d9399 as c2, d9400 as c3 } from '../descriptors/data/427.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d1381 as d1381 } from '../descriptors/data/68.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1381;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderTaxExemptionInputCustomer"]:c0(),["SharedCodec1973"]:c1(),["SharedCodec1974"]:c2(),["SharedCodec1975"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxExemptionInputCustomer(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
