import { d323 as c0 } from '../descriptors/data/17.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8056 as c1 } from '../descriptors/data/352.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d323 as d323 } from '../descriptors/data/17.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d323;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateLicenseKeyPoolRequest"]:c0(),["MetadataRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateLicenseKeyPoolRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
