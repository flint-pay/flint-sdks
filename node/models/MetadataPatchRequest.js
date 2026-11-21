import { d1263 as c0 } from '../descriptors/data/62.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d1263 as d1263 } from '../descriptors/data/62.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1263;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MetadataPatchRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeMetadataPatchRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
