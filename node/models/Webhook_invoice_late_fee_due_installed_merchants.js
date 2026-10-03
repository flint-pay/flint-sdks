import { d1662 as c0, d74 as c1, d917 as c2, d911 as c3, d916 as c4, d1432 as c5, d1660 as c6, d1661 as c7, d1433 as c8 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d1433 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1433;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceLateFeePolicy"]:c0(),["MoneyValue"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec278"]:c3(),["SharedCodec280"]:c4(),["SharedCodec389"]:c5(),["SharedCodec448"]:c6(),["SharedCodec449"]:c7(),["Webhook_invoice_late_fee_due_installed_merchants"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_invoice_late_fee_due_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
