import { d3630 as c0 } from '../descriptors/data/150.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d3630 as d3630 } from '../descriptors/data/150.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3630;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ImageReferenceRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeImageReferenceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
