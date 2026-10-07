import { d1472 as c0, d1701 as c1, d936 as c2, d77 as c3, d944 as c4, d526 as c5, d935 as c6, d938 as c7, d943 as c8, d1468 as c9, d1470 as c10, d1699 as c11, d1700 as c12, d1471 as c13, d1469 as c14 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1472 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1472;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookcff5d1339489Payload"]:c0(),["InvoiceLateFeePolicy"]:c1(),["MerchantWebhookEnvelope"]:c2(),["MoneyValue"]:c3(),["PartnerWebhookEnvelope"]:c4(),["SharedCodec199"]:c5(),["SharedCodec286"]:c6(),["SharedCodec289"]:c7(),["SharedCodec291"]:c8(),["SharedCodec400"]:c9(),["SharedCodec401"]:c10(),["SharedCodec461"]:c11(),["SharedCodec462"]:c12(),["Webhook_invoice_late_fee_due_installed_merchants"]:c13(),["Webhook_invoice_late_fee_due_merchant"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookcff5d1339489Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
