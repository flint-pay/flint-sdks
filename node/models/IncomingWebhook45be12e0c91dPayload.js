import { d898 as c0, d900 as c1, d902 as c2, d1138 as c3, d930 as c4, d938 as c5, d525 as c6, d896 as c7, d897 as c8, d929 as c9, d937 as c10, d1136 as c11, d1137 as c12, d1135 as c13 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d1138 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1138;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardNotification"]:c0(),["GiftCardNotificationDeliveryAttempt"]:c1(),["GiftCardNotificationProviderOutcome"]:c2(),["IncomingWebhook45be12e0c91dPayload"]:c3(),["MerchantWebhookEnvelope"]:c4(),["PartnerWebhookEnvelope"]:c5(),["SharedCodec199"]:c6(),["SharedCodec279"]:c7(),["SharedCodec280"]:c8(),["SharedCodec282"]:c9(),["SharedCodec287"]:c10(),["SharedCodec337"]:c11(),["Webhook_gift_card_notification_updated_installed_merchants"]:c12(),["Webhook_gift_card_notification_updated_merchant"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook45be12e0c91dPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
