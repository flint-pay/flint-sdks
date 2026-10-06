import { d1115 as c0, d916 as c1, d924 as c2, d520 as c3, d915 as c4, d923 as c5, d1111 as c6, d1110 as c7, d1113 as c8, d1114 as c9, d1112 as c10 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1115 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1115;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook44764240a51fPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec281"]:c4(),["SharedCodec286"]:c5(),["SharedCodec332"]:c6(),["SharedCodec333"]:c7(),["SharedCodec334"]:c8(),["Webhook_subscription_cancellation_scheduled_installed_merchants"]:c9(),["Webhook_subscription_cancellation_scheduled_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook44764240a51fPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
