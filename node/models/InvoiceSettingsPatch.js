import { d1685 as c0, d1702 as c1, d1703 as c2, d1717 as c3, d1718 as c4, d1742 as c5, d77 as c6, d73 as c7, d74 as c8, d1739 as c9, d1740 as c10, d1741 as c11 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d1742 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1742;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceAutopayRetryPolicy"]:c0(),["InvoicePaymentOptionLimit"]:c1(),["InvoicePaymentPolicy"]:c2(),["InvoiceReminderPolicy"]:c3(),["InvoiceReminderRule"]:c4(),["InvoiceSettingsPatch"]:c5(),["MoneyValue"]:c6(),["PostalAddress"]:c7(),["SharedCodec19"]:c8(),["SharedCodec481"]:c9(),["SharedCodec482"]:c10(),["SharedCodec483"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceSettingsPatch(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
