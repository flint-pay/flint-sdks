import { d865 as c0, d866 as c1, d868 as c2, d869 as c3, d903 as c4, d902 as c5, d1112 as c6, d1113 as c7 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1113 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1113;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardNotificationDelivery"]:c0(),["GiftCardNotificationDeliveryAttempt"]:c1(),["GiftCardNotificationProviderOutcome"]:c2(),["GiftCardNotificationRecipient"]:c3(),["PartnerWebhookEnvelope"]:c4(),["SharedCodec252"]:c5(),["SharedCodec307"]:c6(),["Webhook_gift_card_notification_updated_installed_merchants"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_gift_card_notification_updated_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
