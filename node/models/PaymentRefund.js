import { d132 as c0, d74 as c1, d1952 as c2, d1953 as c3, d1954 as c4, d1956 as c5, d753 as c6 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d1952 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1952;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedPaymentIntentSummary"]:c0(),["MoneyValue"]:c1(),["PaymentRefund"]:c2(),["PaymentSourceAchDebitSummary"]:c3(),["PaymentSourceCardSummary"]:c4(),["PaymentSourceSummary"]:c5(),["SharedCodec240"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentRefund(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
