import { d859 as c0, d860 as c1, d861 as c2, d863 as c3, d864 as c4, d1456 as c5, d893 as c6, d901 as c7, d490 as c8, d892 as c9, d900 as c10, d1110 as c11, d1455 as c12, d1454 as c13 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d1456 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1456;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardNotification"]:c0(),["GiftCardNotificationDelivery"]:c1(),["GiftCardNotificationDeliveryAttempt"]:c2(),["GiftCardNotificationProviderOutcome"]:c3(),["GiftCardNotificationRecipient"]:c4(),["IncomingWebhookd299182c6639Payload"]:c5(),["MerchantWebhookEnvelope"]:c6(),["PartnerWebhookEnvelope"]:c7(),["SharedCodec170"]:c8(),["SharedCodec246"]:c9(),["SharedCodec251"]:c10(),["SharedCodec306"]:c11(),["Webhook_gift_card_notification_created_installed_merchants"]:c12(),["Webhook_gift_card_notification_created_merchant"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookd299182c6639Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
