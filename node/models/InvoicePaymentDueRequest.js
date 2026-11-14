import { d7158 as c0 } from '../descriptors/data/335.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6217 as c1, d6218 as c2, d6220 as c3, d6222 as c4 } from '../descriptors/data/282.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7203 as c5, d7204 as c6, d7205 as c7, d7206 as c8, d7207 as c9, d7208 as c10, d7209 as c11 } from '../descriptors/data/337.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7158 as d7158 } from '../descriptors/data/335.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7158;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentDueRequest"]:c0(),["SharedCodec933"]:c1(),["SharedCodec934"]:c2(),["SharedCodec936"]:c3(),["SharedCodec938"]:c4(),["SharedCodec939"]:c5(),["SharedCodec940"]:c6(),["SharedCodec941"]:c7(),["SharedCodec942"]:c8(),["SharedCodec943"]:c9(),["SharedCodec944"]:c10(),["SharedCodec945"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentDueRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
