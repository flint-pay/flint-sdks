import { d1747 as c0 } from '../descriptors/data/86.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9432 as c1, d9433 as c2, d9434 as c3 } from '../descriptors/data/428.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d1747 as d1747 } from '../descriptors/data/86.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1747;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RemoveLicenseKeyPoolKeysRequest"]:c0(),["SharedCodec2585"]:c1(),["SharedCodec2586"]:c2(),["SharedCodec2587"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRemoveLicenseKeyPoolKeysRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
