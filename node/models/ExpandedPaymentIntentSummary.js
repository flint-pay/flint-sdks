import { d132 as c0, d74 as c1, d1953 as c2, d1954 as c3, d1956 as c4 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d132 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d132;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedPaymentIntentSummary"]:c0(),["MoneyValue"]:c1(),["PaymentSourceAchDebitSummary"]:c2(),["PaymentSourceCardSummary"]:c3(),["PaymentSourceSummary"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeExpandedPaymentIntentSummary(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
