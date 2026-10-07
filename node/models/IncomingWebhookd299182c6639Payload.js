import { d904 as c0, d906 as c1, d908 as c2, d1475 as c3, d936 as c4, d944 as c5, d526 as c6, d902 as c7, d903 as c8, d935 as c9, d943 as c10, d1142 as c11, d1474 as c12, d1473 as c13 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1475 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1475;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardNotification"]:c0(),["GiftCardNotificationDeliveryAttempt"]:c1(),["GiftCardNotificationProviderOutcome"]:c2(),["IncomingWebhookd299182c6639Payload"]:c3(),["MerchantWebhookEnvelope"]:c4(),["PartnerWebhookEnvelope"]:c5(),["SharedCodec199"]:c6(),["SharedCodec283"]:c7(),["SharedCodec284"]:c8(),["SharedCodec286"]:c9(),["SharedCodec291"]:c10(),["SharedCodec341"]:c11(),["Webhook_gift_card_notification_created_installed_merchants"]:c12(),["Webhook_gift_card_notification_created_merchant"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookd299182c6639Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
