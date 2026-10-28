import { d4012 as c0, d4011 as c1, d4008 as c2, d4009 as c3, d4010 as c4 } from '../descriptors/data/170.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d4012 as d4012 } from '../descriptors/data/170.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4012;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventorySourceSystemRequest"]:c0(),["SharedCodec150"]:c1(),["SharedCodec837"]:c2(),["SharedCodec838"]:c3(),["SharedCodec839"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventorySourceSystemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
