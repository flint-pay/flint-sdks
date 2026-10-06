import { d900 as c0, d902 as c1, d938 as c2, d896 as c3, d897 as c4, d937 as c5, d1136 as c6, d1137 as c7 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d1137 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1137;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardNotificationDeliveryAttempt"]:c0(),["GiftCardNotificationProviderOutcome"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec279"]:c3(),["SharedCodec280"]:c4(),["SharedCodec287"]:c5(),["SharedCodec337"]:c6(),["Webhook_gift_card_notification_updated_installed_merchants"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_gift_card_notification_updated_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
