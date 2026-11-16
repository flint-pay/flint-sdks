import { d883 as c0 } from '../descriptors/data/44.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6244 as c1, d6245 as c2 } from '../descriptors/data/285.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d883 as d883 } from '../descriptors/data/44.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d883;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentDueInputNone"]:c0(),["SharedCodec933"]:c1(),["SharedCodec934"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentDueInputNone(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
