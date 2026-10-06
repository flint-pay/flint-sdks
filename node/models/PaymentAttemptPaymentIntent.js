import { d789 as c0, d77 as c1, d1823 as c2, d1822 as c3, d1955 as c4, d863 as c5, d14 as c6, d1821 as c7 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d1955 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1955;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ErrorRemediation"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["PaymentAttemptPaymentIntent"]:c4(),["PaymentErrorSummary"]:c5(),["SharedCodec1"]:c6(),["SharedCodec487"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentAttemptPaymentIntent(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
