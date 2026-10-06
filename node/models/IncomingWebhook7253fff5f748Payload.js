import { d1219 as c0, d916 as c1, d924 as c2, d520 as c3, d915 as c4, d920 as c5, d919 as c6, d918 as c7, d922 as c8, d923 as c9, d1218 as c10, d1217 as c11 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1219 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1219;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook7253fff5f748Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec281"]:c4(),["SharedCodec282"]:c5(),["SharedCodec283"]:c6(),["SharedCodec284"]:c7(),["SharedCodec285"]:c8(),["SharedCodec286"]:c9(),["Webhook_payment_intent_succeeded_installed_merchants"]:c10(),["Webhook_payment_intent_succeeded_merchant"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook7253fff5f748Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
