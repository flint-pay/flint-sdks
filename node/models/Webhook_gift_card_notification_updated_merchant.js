import { d898 as c0, d900 as c1, d902 as c2, d930 as c3, d525 as c4, d896 as c5, d897 as c6, d929 as c7, d1135 as c8 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d1135 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1135;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardNotification"]:c0(),["GiftCardNotificationDeliveryAttempt"]:c1(),["GiftCardNotificationProviderOutcome"]:c2(),["MerchantWebhookEnvelope"]:c3(),["SharedCodec199"]:c4(),["SharedCodec279"]:c5(),["SharedCodec280"]:c6(),["SharedCodec282"]:c7(),["Webhook_gift_card_notification_updated_merchant"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_gift_card_notification_updated_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
