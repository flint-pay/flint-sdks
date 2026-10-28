import { d174 as c0 } from '../descriptors/data/8.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d4054 as c1 } from '../descriptors/data/172.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d4012 as c2, d4013 as c3, d4014 as c4, d4015 as c5, d4011 as c6, d4008 as c7, d4009 as c8, d4010 as c9 } from '../descriptors/data/170.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d174 as d174 } from '../descriptors/data/8.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d174;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryReceiptRequest"]:c0(),["InventoryReceiptLineRequest"]:c1(),["InventorySourceSystemRequest"]:c2(),["SharedCodec147"]:c3(),["SharedCodec148"]:c4(),["SharedCodec149"]:c5(),["SharedCodec150"]:c6(),["SharedCodec837"]:c7(),["SharedCodec838"]:c8(),["SharedCodec839"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryReceiptRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
