import { d1684 as c0, d1701 as c1, d1702 as c2, d1716 as c3, d1717 as c4, d1737 as c5, d77 as c6, d73 as c7 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d1737 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1737;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceAutopayRetryPolicy"]:c0(),["InvoicePaymentOptionLimit"]:c1(),["InvoicePaymentPolicy"]:c2(),["InvoiceReminderPolicy"]:c3(),["InvoiceReminderRule"]:c4(),["InvoiceSettings"]:c5(),["MoneyValue"]:c6(),["PostalAddress"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceSettings(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
