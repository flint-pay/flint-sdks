import { d1002 as c0, d916 as c1, d924 as c2, d520 as c3, d915 as c4, d918 as c5, d923 as c6, d998 as c7, d1000 as c8, d1001 as c9, d999 as c10 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1002 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1002;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook1def026adfecPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec281"]:c4(),["SharedCodec284"]:c5(),["SharedCodec286"]:c6(),["SharedCodec315"]:c7(),["SharedCodec316"]:c8(),["Webhook_invoice_overdue_installed_merchants"]:c9(),["Webhook_invoice_overdue_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook1def026adfecPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
