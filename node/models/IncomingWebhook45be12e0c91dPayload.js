import { d877 as c0, d879 as c1, d881 as c2, d1113 as c3, d909 as c4, d917 as c5, d515 as c6, d875 as c7, d876 as c8, d908 as c9, d916 as c10, d1111 as c11, d1112 as c12, d1110 as c13 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d1113 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1113;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardNotification"]:c0(),["GiftCardNotificationDeliveryAttempt"]:c1(),["GiftCardNotificationProviderOutcome"]:c2(),["IncomingWebhook45be12e0c91dPayload"]:c3(),["MerchantWebhookEnvelope"]:c4(),["PartnerWebhookEnvelope"]:c5(),["SharedCodec197"]:c6(),["SharedCodec272"]:c7(),["SharedCodec273"]:c8(),["SharedCodec275"]:c9(),["SharedCodec280"]:c10(),["SharedCodec329"]:c11(),["Webhook_gift_card_notification_updated_installed_merchants"]:c12(),["Webhook_gift_card_notification_updated_merchant"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook45be12e0c91dPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
