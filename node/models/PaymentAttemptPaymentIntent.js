import { d777 as c0, d77 as c1, d1797 as c2, d1796 as c3, d1929 as c4, d850 as c5, d14 as c6, d1795 as c7 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1929 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1929;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ErrorRemediation"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["PaymentAttemptPaymentIntent"]:c4(),["PaymentErrorSummary"]:c5(),["SharedCodec1"]:c6(),["SharedCodec485"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentAttemptPaymentIntent(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
