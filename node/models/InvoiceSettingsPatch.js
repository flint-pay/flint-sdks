import { d1672 as c0, d1702 as c1, d1703 as c2, d1715 as c3, d1716 as c4, d1740 as c5, d323 as c6, d66 as c7, d67 as c8, d1737 as c9, d1738 as c10, d1739 as c11 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d1740 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1740;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceAutopayRetryPolicy"]:c0(),["InvoicePaymentOptionLimit"]:c1(),["InvoicePaymentPolicy"]:c2(),["InvoiceReminderPolicy"]:c3(),["InvoiceReminderRule"]:c4(),["InvoiceSettingsPatch"]:c5(),["MoneyValue"]:c6(),["PostalAddress"]:c7(),["SharedCodec14"]:c8(),["SharedCodec461"]:c9(),["SharedCodec462"]:c10(),["SharedCodec463"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceSettingsPatch(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
