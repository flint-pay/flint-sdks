import { d860 as c0, d861 as c1, d863 as c2, d864 as c3, d901 as c4, d900 as c5, d1110 as c6, d1111 as c7 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d1111 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1111;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardNotificationDelivery"]:c0(),["GiftCardNotificationDeliveryAttempt"]:c1(),["GiftCardNotificationProviderOutcome"]:c2(),["GiftCardNotificationRecipient"]:c3(),["PartnerWebhookEnvelope"]:c4(),["SharedCodec251"]:c5(),["SharedCodec306"]:c6(),["Webhook_gift_card_notification_updated_installed_merchants"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_gift_card_notification_updated_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
