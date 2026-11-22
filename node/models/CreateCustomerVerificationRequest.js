import { d266 as c0 } from '../descriptors/data/13.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d266 as d266 } from '../descriptors/data/13.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d266;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateCustomerVerificationRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCustomerVerificationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
