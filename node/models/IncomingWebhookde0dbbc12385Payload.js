import { d1482 as c0, d916 as c1, d924 as c2, d520 as c3, d915 as c4, d918 as c5, d923 as c6, d1478 as c7, d1480 as c8, d1481 as c9, d1479 as c10 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1482 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1482;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookde0dbbc12385Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec281"]:c4(),["SharedCodec284"]:c5(),["SharedCodec286"]:c6(),["SharedCodec397"]:c7(),["SharedCodec398"]:c8(),["Webhook_invoice_reminder_due_installed_merchants"]:c9(),["Webhook_invoice_reminder_due_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookde0dbbc12385Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
