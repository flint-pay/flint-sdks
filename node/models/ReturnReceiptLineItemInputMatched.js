import { d924 as c0 } from '../descriptors/data/41.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d4942 as c1 } from '../descriptors/data/225.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d4982 as c2 } from '../descriptors/data/228.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d924 as d924 } from '../descriptors/data/41.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d924;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnReceiptLineItemInputMatched"]:c0(),["ReturnUnverifiedItem"]:c1(),["SharedCodec1099"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnReceiptLineItemInputMatched(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
