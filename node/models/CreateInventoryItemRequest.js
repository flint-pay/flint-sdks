import { d173 as c0 } from '../descriptors/data/8.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d173 as d173 } from '../descriptors/data/8.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d173;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryItemRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
