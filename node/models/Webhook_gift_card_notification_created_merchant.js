import { d859 as c0, d860 as c1, d861 as c2, d863 as c3, d864 as c4, d893 as c5, d490 as c6, d892 as c7, d1454 as c8 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d1454 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1454;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardNotification"]:c0(),["GiftCardNotificationDelivery"]:c1(),["GiftCardNotificationDeliveryAttempt"]:c2(),["GiftCardNotificationProviderOutcome"]:c3(),["GiftCardNotificationRecipient"]:c4(),["MerchantWebhookEnvelope"]:c5(),["SharedCodec170"]:c6(),["SharedCodec246"]:c7(),["Webhook_gift_card_notification_created_merchant"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_gift_card_notification_created_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
