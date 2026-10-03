import { d1476 as c0, d909 as c1, d917 as c2, d515 as c3, d908 as c4, d911 as c5, d916 as c6, d1472 as c7, d1474 as c8, d1475 as c9, d1473 as c10 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d1476 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1476;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookde0dbbc12385Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec197"]:c3(),["SharedCodec275"]:c4(),["SharedCodec278"]:c5(),["SharedCodec280"]:c6(),["SharedCodec392"]:c7(),["SharedCodec393"]:c8(),["Webhook_invoice_reminder_due_installed_merchants"]:c9(),["Webhook_invoice_reminder_due_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookde0dbbc12385Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
