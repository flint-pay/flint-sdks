import { d864 as c0, d865 as c1, d866 as c2, d868 as c3, d869 as c4, d1458 as c5, d898 as c6, d903 as c7, d500 as c8, d897 as c9, d902 as c10, d1112 as c11, d1457 as c12, d1456 as c13 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d1458 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1458;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardNotification"]:c0(),["GiftCardNotificationDelivery"]:c1(),["GiftCardNotificationDeliveryAttempt"]:c2(),["GiftCardNotificationProviderOutcome"]:c3(),["GiftCardNotificationRecipient"]:c4(),["IncomingWebhookd299182c6639Payload"]:c5(),["MerchantWebhookEnvelope"]:c6(),["PartnerWebhookEnvelope"]:c7(),["SharedCodec176"]:c8(),["SharedCodec250"]:c9(),["SharedCodec252"]:c10(),["SharedCodec307"]:c11(),["Webhook_gift_card_notification_created_installed_merchants"]:c12(),["Webhook_gift_card_notification_created_merchant"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookd299182c6639Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
