import { d1659 as c0, d1676 as c1, d1677 as c2, d1691 as c3, d1692 as c4, d1712 as c5, d77 as c6, d73 as c7 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1712 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1712;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceAutopayRetryPolicy"]:c0(),["InvoicePaymentOptionLimit"]:c1(),["InvoicePaymentPolicy"]:c2(),["InvoiceReminderPolicy"]:c3(),["InvoiceReminderRule"]:c4(),["InvoiceSettings"]:c5(),["MoneyValue"]:c6(),["PostalAddress"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceSettings(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
