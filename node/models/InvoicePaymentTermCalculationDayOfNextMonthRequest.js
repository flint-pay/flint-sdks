import { d887 as c0 } from '../descriptors/data/44.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6200 as c1 } from '../descriptors/data/283.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d887 as d887 } from '../descriptors/data/44.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d887;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentTermCalculationDayOfNextMonthRequest"]:c0(),["SharedCodec956"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentTermCalculationDayOfNextMonthRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
