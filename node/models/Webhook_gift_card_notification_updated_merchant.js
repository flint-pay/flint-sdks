import { d859 as c0, d860 as c1, d861 as c2, d863 as c3, d864 as c4, d893 as c5, d490 as c6, d892 as c7, d1109 as c8 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d1109 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1109;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardNotification"]:c0(),["GiftCardNotificationDelivery"]:c1(),["GiftCardNotificationDeliveryAttempt"]:c2(),["GiftCardNotificationProviderOutcome"]:c3(),["GiftCardNotificationRecipient"]:c4(),["MerchantWebhookEnvelope"]:c5(),["SharedCodec170"]:c6(),["SharedCodec246"]:c7(),["Webhook_gift_card_notification_updated_merchant"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_gift_card_notification_updated_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
