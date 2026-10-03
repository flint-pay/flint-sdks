import { d1434 as c0, d1662 as c1, d909 as c2, d74 as c3, d917 as c4, d515 as c5, d908 as c6, d911 as c7, d916 as c8, d1430 as c9, d1432 as c10, d1660 as c11, d1661 as c12, d1433 as c13, d1431 as c14 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d1434 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1434;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookcff5d1339489Payload"]:c0(),["InvoiceLateFeePolicy"]:c1(),["MerchantWebhookEnvelope"]:c2(),["MoneyValue"]:c3(),["PartnerWebhookEnvelope"]:c4(),["SharedCodec197"]:c5(),["SharedCodec275"]:c6(),["SharedCodec278"]:c7(),["SharedCodec280"]:c8(),["SharedCodec388"]:c9(),["SharedCodec389"]:c10(),["SharedCodec448"]:c11(),["SharedCodec449"]:c12(),["Webhook_invoice_late_fee_due_installed_merchants"]:c13(),["Webhook_invoice_late_fee_due_merchant"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookcff5d1339489Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
