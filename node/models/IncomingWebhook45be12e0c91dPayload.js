import { d885 as c0, d887 as c1, d889 as c2, d1120 as c3, d916 as c4, d924 as c5, d520 as c6, d883 as c7, d884 as c8, d915 as c9, d923 as c10, d1118 as c11, d1119 as c12, d1117 as c13 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1120 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1120;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardNotification"]:c0(),["GiftCardNotificationDeliveryAttempt"]:c1(),["GiftCardNotificationProviderOutcome"]:c2(),["IncomingWebhook45be12e0c91dPayload"]:c3(),["MerchantWebhookEnvelope"]:c4(),["PartnerWebhookEnvelope"]:c5(),["SharedCodec199"]:c6(),["SharedCodec278"]:c7(),["SharedCodec279"]:c8(),["SharedCodec281"]:c9(),["SharedCodec286"]:c10(),["SharedCodec335"]:c11(),["Webhook_gift_card_notification_updated_installed_merchants"]:c12(),["Webhook_gift_card_notification_updated_merchant"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook45be12e0c91dPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
