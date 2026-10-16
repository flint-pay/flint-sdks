import { d865 as c0, d866 as c1, d868 as c2, d869 as c3, d903 as c4, d902 as c5, d1112 as c6, d1457 as c7 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d1457 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1457;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardNotificationDelivery"]:c0(),["GiftCardNotificationDeliveryAttempt"]:c1(),["GiftCardNotificationProviderOutcome"]:c2(),["GiftCardNotificationRecipient"]:c3(),["PartnerWebhookEnvelope"]:c4(),["SharedCodec252"]:c5(),["SharedCodec307"]:c6(),["Webhook_gift_card_notification_created_installed_merchants"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_gift_card_notification_created_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
