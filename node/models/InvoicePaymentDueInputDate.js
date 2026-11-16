import { d881 as c0 } from '../descriptors/data/44.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6247 as c1 } from '../descriptors/data/285.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d881 as d881 } from '../descriptors/data/44.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d881;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentDueInputDate"]:c0(),["SharedCodec936"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentDueInputDate(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
