import { d7159 as c0 } from '../descriptors/data/337.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6214 as c1, d6215 as c2, d6217 as c3, d6219 as c4 } from '../descriptors/data/284.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d7202 as c5, d7203 as c6, d7204 as c7, d7205 as c8, d7206 as c9, d7207 as c10, d7208 as c11 } from '../descriptors/data/339.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d7159 as d7159 } from '../descriptors/data/337.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7159;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentDueRequest"]:c0(),["SharedCodec933"]:c1(),["SharedCodec934"]:c2(),["SharedCodec936"]:c3(),["SharedCodec938"]:c4(),["SharedCodec939"]:c5(),["SharedCodec940"]:c6(),["SharedCodec941"]:c7(),["SharedCodec942"]:c8(),["SharedCodec943"]:c9(),["SharedCodec944"]:c10(),["SharedCodec945"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentDueRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
