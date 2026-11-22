import { d1239 as c0 } from '../descriptors/data/61.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9784 as c1 } from '../descriptors/data/452.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d7976 as c2 } from '../descriptors/data/347.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d1239 as d1239 } from '../descriptors/data/61.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1239;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantAccountSessionCreateRequest"]:c0(),["SharedCodec1785"]:c1(),["SharedCodec1786"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeMerchantAccountSessionCreateRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
