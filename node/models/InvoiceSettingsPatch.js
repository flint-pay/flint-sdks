import { d1650 as c0, d1669 as c1, d1670 as c2, d1684 as c3, d1685 as c4, d1709 as c5, d74 as c6, d70 as c7, d71 as c8, d1706 as c9, d1707 as c10, d1708 as c11 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d1709 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1709;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceAutopayRetryPolicy"]:c0(),["InvoicePaymentOptionLimit"]:c1(),["InvoicePaymentPolicy"]:c2(),["InvoiceReminderPolicy"]:c3(),["InvoiceReminderRule"]:c4(),["InvoiceSettingsPatch"]:c5(),["MoneyValue"]:c6(),["PostalAddress"]:c7(),["SharedCodec18"]:c8(),["SharedCodec472"]:c9(),["SharedCodec473"]:c10(),["SharedCodec474"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceSettingsPatch(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
