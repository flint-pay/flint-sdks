import { d1691 as c0, d1708 as c1, d1709 as c2, d1723 as c3, d1724 as c4, d1748 as c5, d77 as c6, d73 as c7, d74 as c8, d1745 as c9, d1746 as c10, d1747 as c11 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1748 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1748;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceAutopayRetryPolicy"]:c0(),["InvoicePaymentOptionLimit"]:c1(),["InvoicePaymentPolicy"]:c2(),["InvoiceReminderPolicy"]:c3(),["InvoiceReminderRule"]:c4(),["InvoiceSettingsPatch"]:c5(),["MoneyValue"]:c6(),["PostalAddress"]:c7(),["SharedCodec19"]:c8(),["SharedCodec485"]:c9(),["SharedCodec486"]:c10(),["SharedCodec487"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceSettingsPatch(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
