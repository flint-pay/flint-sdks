import { d1525 as c0, d69 as c1, d823 as c2, d817 as c3, d822 as c4, d1298 as c5, d1523 as c6, d1524 as c7, d1299 as c8 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1299 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1299;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceLateFeePolicy"]:c0(),["MoneyValue"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec247"]:c3(),["SharedCodec249"]:c4(),["SharedCodec348"]:c5(),["SharedCodec407"]:c6(),["SharedCodec408"]:c7(),["Webhook_invoice_late_fee_due_installed_merchants"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_invoice_late_fee_due_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
