import { d8480 as c0, d8471 as c1, d8472 as c2, d8481 as c8, d8482 as c9 } from '../descriptors/data/376.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8156 as c3, d8157 as c4 } from '../descriptors/data/359.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8058 as c5, d8059 as c6, d8057 as c7 } from '../descriptors/data/352.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8439 as c10, d8440 as c11, d8441 as c12 } from '../descriptors/data/374.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d7753 as c13 } from '../descriptors/data/325.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d7753 as d7753 } from '../descriptors/data/325.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7753;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DocumentTaxIDRequest"]:c0(),["SharedCodec1722"]:c1(),["SharedCodec1723"]:c2(),["SharedCodec2"]:c3(),["SharedCodec3"]:c4(),["SharedCodec3079"]:c5(),["SharedCodec3080"]:c6(),["SharedCodec3081"]:c7(),["SharedCodec3086"]:c8(),["SharedCodec3087"]:c9(),["SharedCodec3088"]:c10(),["SharedCodec3089"]:c11(),["SharedCodec3090"]:c12(),["UpdateCustomerRequest"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateCustomerRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
