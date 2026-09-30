import { d1300 as c0, d1525 as c1, d815 as c2, d69 as c3, d823 as c4, d468 as c5, d814 as c6, d817 as c7, d822 as c8, d1296 as c9, d1298 as c10, d1523 as c11, d1524 as c12, d1299 as c13, d1297 as c14 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1300 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1300;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookcff5d1339489Payload"]:c0(),["InvoiceLateFeePolicy"]:c1(),["MerchantWebhookEnvelope"]:c2(),["MoneyValue"]:c3(),["PartnerWebhookEnvelope"]:c4(),["SharedCodec176"]:c5(),["SharedCodec244"]:c6(),["SharedCodec247"]:c7(),["SharedCodec249"]:c8(),["SharedCodec347"]:c9(),["SharedCodec348"]:c10(),["SharedCodec407"]:c11(),["SharedCodec408"]:c12(),["Webhook_invoice_late_fee_due_installed_merchants"]:c13(),["Webhook_invoice_late_fee_due_merchant"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookcff5d1339489Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
