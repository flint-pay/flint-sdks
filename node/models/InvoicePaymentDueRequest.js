import { d7189 as c0 } from '../descriptors/data/338.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6244 as c1, d6245 as c2, d6247 as c3, d6249 as c4 } from '../descriptors/data/285.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7232 as c5, d7233 as c6, d7234 as c7, d7235 as c8, d7236 as c9, d7237 as c10, d7238 as c11 } from '../descriptors/data/340.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7189 as d7189 } from '../descriptors/data/338.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7189;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentDueRequest"]:c0(),["SharedCodec933"]:c1(),["SharedCodec934"]:c2(),["SharedCodec936"]:c3(),["SharedCodec938"]:c4(),["SharedCodec939"]:c5(),["SharedCodec940"]:c6(),["SharedCodec941"]:c7(),["SharedCodec942"]:c8(),["SharedCodec943"]:c9(),["SharedCodec944"]:c10(),["SharedCodec945"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentDueRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
