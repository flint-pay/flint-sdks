import { d1233 as c0, d916 as c1, d924 as c2, d520 as c3, d915 as c4, d923 as c5, d1160 as c6, d1232 as c7, d1231 as c8 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1233 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1233;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook78590778ef68Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec281"]:c4(),["SharedCodec286"]:c5(),["SharedCodec342"]:c6(),["Webhook_customer_updated_installed_merchants"]:c7(),["Webhook_customer_updated_merchant"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook78590778ef68Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
