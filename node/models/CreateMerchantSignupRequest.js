import { d333 as c0 } from '../descriptors/data/18.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9801 as c1 } from '../descriptors/data/453.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d333 as d333 } from '../descriptors/data/18.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d333;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateMerchantSignupRequest"]:c0(),["MerchantSignupOwnerRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateMerchantSignupRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
