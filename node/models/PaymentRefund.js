import { d138 as c0, d77 as c1, d1966 as c2, d1967 as c3, d1968 as c4, d1970 as c5, d761 as c6 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1966 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1966;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedPaymentIntentSummary"]:c0(),["MoneyValue"]:c1(),["PaymentRefund"]:c2(),["PaymentSourceAchDebitSummary"]:c3(),["PaymentSourceCardSummary"]:c4(),["PaymentSourceSummary"]:c5(),["SharedCodec246"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentRefund(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
