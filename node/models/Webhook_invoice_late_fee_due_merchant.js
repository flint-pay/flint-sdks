import { d1662 as c0, d909 as c1, d74 as c2, d515 as c3, d908 as c4, d911 as c5, d1430 as c6, d1660 as c7, d1661 as c8, d1431 as c9 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d1431 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1431;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceLateFeePolicy"]:c0(),["MerchantWebhookEnvelope"]:c1(),["MoneyValue"]:c2(),["SharedCodec197"]:c3(),["SharedCodec275"]:c4(),["SharedCodec278"]:c5(),["SharedCodec388"]:c6(),["SharedCodec448"]:c7(),["SharedCodec449"]:c8(),["Webhook_invoice_late_fee_due_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_invoice_late_fee_due_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
