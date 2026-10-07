import { d906 as c0, d908 as c1, d944 as c2, d902 as c3, d903 as c4, d943 as c5, d1142 as c6, d1474 as c7 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1474 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1474;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardNotificationDeliveryAttempt"]:c0(),["GiftCardNotificationProviderOutcome"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec283"]:c3(),["SharedCodec284"]:c4(),["SharedCodec291"]:c5(),["SharedCodec341"]:c6(),["Webhook_gift_card_notification_created_installed_merchants"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_gift_card_notification_created_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
