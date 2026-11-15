import { d7161 as c0 } from '../descriptors/data/337.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6216 as c1, d6217 as c2, d6219 as c3, d6221 as c4 } from '../descriptors/data/284.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d7204 as c5, d7205 as c6, d7206 as c7, d7207 as c8, d7208 as c9, d7209 as c10, d7210 as c11 } from '../descriptors/data/339.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d7161 as d7161 } from '../descriptors/data/337.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7161;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentDueRequest"]:c0(),["SharedCodec933"]:c1(),["SharedCodec934"]:c2(),["SharedCodec936"]:c3(),["SharedCodec938"]:c4(),["SharedCodec939"]:c5(),["SharedCodec940"]:c6(),["SharedCodec941"]:c7(),["SharedCodec942"]:c8(),["SharedCodec943"]:c9(),["SharedCodec944"]:c10(),["SharedCodec945"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentDueRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
