import { d1997 as c0, d1998 as c1, d2000 as c2 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d2000 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2000;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PaymentSourceAchDebitSummary"]:c0(),["PaymentSourceCardSummary"]:c1(),["PaymentSourceSummary"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentSourceSummary(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
