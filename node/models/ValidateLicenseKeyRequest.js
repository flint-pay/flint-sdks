import { d7831 as c0 } from '../descriptors/data/332.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d7831 as d7831 } from '../descriptors/data/332.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7831;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ValidateLicenseKeyRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeValidateLicenseKeyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
