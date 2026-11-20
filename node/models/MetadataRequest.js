import { d8048 as c0 } from '../descriptors/data/352.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8048 as d8048 } from '../descriptors/data/352.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8048;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MetadataRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeMetadataRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
