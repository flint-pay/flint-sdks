import { d908 as c0 } from '../descriptors/data/45.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5784 as c1 } from '../descriptors/data/258.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6234 as c2, d6235 as c3 } from '../descriptors/data/285.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d908 as d908 } from '../descriptors/data/45.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d908;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleAmountSpecificationRemainingBalanceRequest"]:c0(),["MoneyValue"]:c1(),["SharedCodec968"]:c2(),["SharedCodec969"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleAmountSpecificationRemainingBalanceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
