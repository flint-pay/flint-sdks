import { d100 as c0, d323 as c1, d1996 as c2, d1997 as c3, d1998 as c4, d2000 as c5, d743 as c6 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d1996 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1996;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedPaymentIntentSummary"]:c0(),["MoneyValue"]:c1(),["PaymentRefund"]:c2(),["PaymentSourceAchDebitSummary"]:c3(),["PaymentSourceCardSummary"]:c4(),["PaymentSourceSummary"]:c5(),["SharedCodec222"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentRefund(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
