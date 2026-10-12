import { d859 as c0, d860 as c1, d861 as c2, d863 as c3, d864 as c4, d893 as c5, d490 as c6, d892 as c7, d1109 as c8 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { d1109 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1109;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardNotification"]:c0(),["GiftCardNotificationDelivery"]:c1(),["GiftCardNotificationDeliveryAttempt"]:c2(),["GiftCardNotificationProviderOutcome"]:c3(),["GiftCardNotificationRecipient"]:c4(),["MerchantWebhookEnvelope"]:c5(),["SharedCodec170"]:c6(),["SharedCodec246"]:c7(),["Webhook_gift_card_notification_updated_merchant"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_gift_card_notification_updated_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
