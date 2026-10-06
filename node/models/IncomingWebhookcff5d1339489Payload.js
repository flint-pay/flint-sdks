import { d1465 as c0, d1694 as c1, d930 as c2, d77 as c3, d938 as c4, d525 as c5, d929 as c6, d932 as c7, d937 as c8, d1461 as c9, d1463 as c10, d1692 as c11, d1693 as c12, d1464 as c13, d1462 as c14 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d1465 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1465;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookcff5d1339489Payload"]:c0(),["InvoiceLateFeePolicy"]:c1(),["MerchantWebhookEnvelope"]:c2(),["MoneyValue"]:c3(),["PartnerWebhookEnvelope"]:c4(),["SharedCodec199"]:c5(),["SharedCodec282"]:c6(),["SharedCodec285"]:c7(),["SharedCodec287"]:c8(),["SharedCodec395"]:c9(),["SharedCodec396"]:c10(),["SharedCodec456"]:c11(),["SharedCodec457"]:c12(),["Webhook_invoice_late_fee_due_installed_merchants"]:c13(),["Webhook_invoice_late_fee_due_merchant"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookcff5d1339489Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
