import { d1701 as c0, d936 as c1, d77 as c2, d526 as c3, d935 as c4, d938 as c5, d1468 as c6, d1699 as c7, d1700 as c8, d1469 as c9 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1469 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1469;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceLateFeePolicy"]:c0(),["MerchantWebhookEnvelope"]:c1(),["MoneyValue"]:c2(),["SharedCodec199"]:c3(),["SharedCodec286"]:c4(),["SharedCodec289"]:c5(),["SharedCodec400"]:c6(),["SharedCodec461"]:c7(),["SharedCodec462"]:c8(),["Webhook_invoice_late_fee_due_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_invoice_late_fee_due_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
