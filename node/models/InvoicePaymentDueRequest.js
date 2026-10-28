import { d4144 as c0 } from '../descriptors/data/176.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d3368 as c1, d3369 as c2, d3371 as c3, d3373 as c4 } from '../descriptors/data/136.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d4181 as c5, d4182 as c6, d4183 as c7, d4184 as c8, d4185 as c9, d4186 as c10, d4187 as c11 } from '../descriptors/data/178.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d4144 as d4144 } from '../descriptors/data/176.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4144;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentDueRequest"]:c0(),["SharedCodec903"]:c1(),["SharedCodec904"]:c2(),["SharedCodec906"]:c3(),["SharedCodec908"]:c4(),["SharedCodec909"]:c5(),["SharedCodec910"]:c6(),["SharedCodec911"]:c7(),["SharedCodec912"]:c8(),["SharedCodec913"]:c9(),["SharedCodec914"]:c10(),["SharedCodec915"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentDueRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
