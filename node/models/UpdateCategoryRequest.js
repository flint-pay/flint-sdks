import { d2432 as c0 } from '../descriptors/data/96.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d2432 as d2432 } from '../descriptors/data/96.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2432;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["UpdateCategoryRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateCategoryRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
