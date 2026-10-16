import { d864 as c0, d865 as c1, d866 as c2, d868 as c3, d869 as c4, d898 as c5, d500 as c6, d897 as c7, d1111 as c8 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d1111 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1111;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardNotification"]:c0(),["GiftCardNotificationDelivery"]:c1(),["GiftCardNotificationDeliveryAttempt"]:c2(),["GiftCardNotificationProviderOutcome"]:c3(),["GiftCardNotificationRecipient"]:c4(),["MerchantWebhookEnvelope"]:c5(),["SharedCodec176"]:c6(),["SharedCodec250"]:c7(),["Webhook_gift_card_notification_updated_merchant"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_gift_card_notification_updated_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
