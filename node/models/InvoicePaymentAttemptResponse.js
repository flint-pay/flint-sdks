import { d1699 as c0, d1701 as c1, d77 as c2, d1824 as c3, d1823 as c4, d2158 as c5, d2159 as c6, d14 as c7, d1822 as c8 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d1701 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1701;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentAttempt"]:c0(),["InvoicePaymentAttemptResponse"]:c1(),["MoneyValue"]:c2(),["NextAction"]:c3(),["NextActionMerchantAccountSession"]:c4(),["ResponseMeta"]:c5(),["ResponseWarning"]:c6(),["SharedCodec1"]:c7(),["SharedCodec488"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentAttemptResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
