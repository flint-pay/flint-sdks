import { d1436 as c0, d1664 as c1, d911 as c2, d74 as c3, d919 as c4, d517 as c5, d910 as c6, d913 as c7, d918 as c8, d1432 as c9, d1434 as c10, d1662 as c11, d1663 as c12, d1435 as c13, d1433 as c14 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d1436 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1436;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookcff5d1339489Payload"]:c0(),["InvoiceLateFeePolicy"]:c1(),["MerchantWebhookEnvelope"]:c2(),["MoneyValue"]:c3(),["PartnerWebhookEnvelope"]:c4(),["SharedCodec197"]:c5(),["SharedCodec275"]:c6(),["SharedCodec278"]:c7(),["SharedCodec280"]:c8(),["SharedCodec388"]:c9(),["SharedCodec389"]:c10(),["SharedCodec448"]:c11(),["SharedCodec449"]:c12(),["Webhook_invoice_late_fee_due_installed_merchants"]:c13(),["Webhook_invoice_late_fee_due_merchant"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookcff5d1339489Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
