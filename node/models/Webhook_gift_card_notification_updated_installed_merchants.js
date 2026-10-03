import { d879 as c0, d881 as c1, d917 as c2, d875 as c3, d876 as c4, d916 as c5, d1111 as c6, d1112 as c7 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d1112 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1112;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardNotificationDeliveryAttempt"]:c0(),["GiftCardNotificationProviderOutcome"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec272"]:c3(),["SharedCodec273"]:c4(),["SharedCodec280"]:c5(),["SharedCodec329"]:c6(),["Webhook_gift_card_notification_updated_installed_merchants"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_gift_card_notification_updated_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
