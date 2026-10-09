import { d859 as c0, d860 as c1, d861 as c2, d863 as c3, d864 as c4, d1112 as c5, d893 as c6, d901 as c7, d490 as c8, d892 as c9, d900 as c10, d1110 as c11, d1111 as c12, d1109 as c13 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d1112 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1112;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardNotification"]:c0(),["GiftCardNotificationDelivery"]:c1(),["GiftCardNotificationDeliveryAttempt"]:c2(),["GiftCardNotificationProviderOutcome"]:c3(),["GiftCardNotificationRecipient"]:c4(),["IncomingWebhook45be12e0c91dPayload"]:c5(),["MerchantWebhookEnvelope"]:c6(),["PartnerWebhookEnvelope"]:c7(),["SharedCodec170"]:c8(),["SharedCodec246"]:c9(),["SharedCodec251"]:c10(),["SharedCodec306"]:c11(),["Webhook_gift_card_notification_updated_installed_merchants"]:c12(),["Webhook_gift_card_notification_updated_merchant"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook45be12e0c91dPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
