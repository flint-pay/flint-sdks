import { d1466 as c0, d1695 as c1, d930 as c2, d77 as c3, d938 as c4, d525 as c5, d929 as c6, d932 as c7, d937 as c8, d1462 as c9, d1464 as c10, d1693 as c11, d1694 as c12, d1465 as c13, d1463 as c14 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d1466 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1466;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookcff5d1339489Payload"]:c0(),["InvoiceLateFeePolicy"]:c1(),["MerchantWebhookEnvelope"]:c2(),["MoneyValue"]:c3(),["PartnerWebhookEnvelope"]:c4(),["SharedCodec199"]:c5(),["SharedCodec282"]:c6(),["SharedCodec285"]:c7(),["SharedCodec287"]:c8(),["SharedCodec396"]:c9(),["SharedCodec397"]:c10(),["SharedCodec457"]:c11(),["SharedCodec458"]:c12(),["Webhook_invoice_late_fee_due_installed_merchants"]:c13(),["Webhook_invoice_late_fee_due_merchant"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookcff5d1339489Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
