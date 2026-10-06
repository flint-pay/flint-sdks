import { d898 as c0, d900 as c1, d902 as c2, d930 as c3, d525 as c4, d896 as c5, d897 as c6, d929 as c7, d1466 as c8 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d1466 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1466;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardNotification"]:c0(),["GiftCardNotificationDeliveryAttempt"]:c1(),["GiftCardNotificationProviderOutcome"]:c2(),["MerchantWebhookEnvelope"]:c3(),["SharedCodec199"]:c4(),["SharedCodec279"]:c5(),["SharedCodec280"]:c6(),["SharedCodec282"]:c7(),["Webhook_gift_card_notification_created_merchant"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_gift_card_notification_created_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
