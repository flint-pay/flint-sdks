import { d4040 as c0 } from '../descriptors/data/171.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d2447 as c1 } from '../descriptors/data/98.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d2447 as d2447 } from '../descriptors/data/98.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2447;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1191"]:c0(),["UpdateInventoryItemRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateInventoryItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
