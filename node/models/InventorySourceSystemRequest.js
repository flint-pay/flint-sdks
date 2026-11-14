import { d7016 as c0, d7015 as c1, d7012 as c2, d7013 as c3, d7014 as c4 } from '../descriptors/data/330.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d7016 as d7016 } from '../descriptors/data/330.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7016;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventorySourceSystemRequest"]:c0(),["SharedCodec298"]:c1(),["SharedCodec790"]:c2(),["SharedCodec791"]:c3(),["SharedCodec792"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventorySourceSystemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
