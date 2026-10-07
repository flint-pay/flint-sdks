import { d741 as c0, d314 as c1, d1775 as c2, d1776 as c3, d1913 as c4, d810 as c5, d14 as c6, d1774 as c7 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d1913 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1913;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ErrorRemediation"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["PaymentAttemptPaymentIntent"]:c4(),["PaymentErrorSummary"]:c5(),["SharedCodec1"]:c6(),["SharedCodec448"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentAttemptPaymentIntent(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
