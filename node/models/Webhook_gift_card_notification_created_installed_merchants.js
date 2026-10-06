import { d887 as c0, d889 as c1, d924 as c2, d883 as c3, d884 as c4, d923 as c5, d1118 as c6, d1442 as c7 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1442 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1442;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardNotificationDeliveryAttempt"]:c0(),["GiftCardNotificationProviderOutcome"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec278"]:c3(),["SharedCodec279"]:c4(),["SharedCodec286"]:c5(),["SharedCodec335"]:c6(),["Webhook_gift_card_notification_created_installed_merchants"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_gift_card_notification_created_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
