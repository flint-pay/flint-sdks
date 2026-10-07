import { d838 as c0, d839 as c1, d840 as c2, d842 as c3, d843 as c4, d1080 as c5, d872 as c6, d880 as c7, d469 as c8, d871 as c9, d879 as c10, d1078 as c11, d1079 as c12, d1077 as c13 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d1080 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1080;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardNotification"]:c0(),["GiftCardNotificationDelivery"]:c1(),["GiftCardNotificationDeliveryAttempt"]:c2(),["GiftCardNotificationProviderOutcome"]:c3(),["GiftCardNotificationRecipient"]:c4(),["IncomingWebhook45be12e0c91dPayload"]:c5(),["MerchantWebhookEnvelope"]:c6(),["PartnerWebhookEnvelope"]:c7(),["SharedCodec161"]:c8(),["SharedCodec237"]:c9(),["SharedCodec242"]:c10(),["SharedCodec292"]:c11(),["Webhook_gift_card_notification_updated_installed_merchants"]:c12(),["Webhook_gift_card_notification_updated_merchant"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook45be12e0c91dPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
