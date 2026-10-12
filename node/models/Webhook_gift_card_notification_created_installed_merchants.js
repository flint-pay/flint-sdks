import { d860 as c0, d861 as c1, d863 as c2, d864 as c3, d901 as c4, d900 as c5, d1110 as c6, d1455 as c7 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { d1455 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1455;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardNotificationDelivery"]:c0(),["GiftCardNotificationDeliveryAttempt"]:c1(),["GiftCardNotificationProviderOutcome"]:c2(),["GiftCardNotificationRecipient"]:c3(),["PartnerWebhookEnvelope"]:c4(),["SharedCodec251"]:c5(),["SharedCodec306"]:c6(),["Webhook_gift_card_notification_created_installed_merchants"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_gift_card_notification_created_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
