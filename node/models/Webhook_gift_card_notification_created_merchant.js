import { d877 as c0, d879 as c1, d881 as c2, d909 as c3, d515 as c4, d875 as c5, d876 as c6, d908 as c7, d1435 as c8 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d1435 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1435;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardNotification"]:c0(),["GiftCardNotificationDeliveryAttempt"]:c1(),["GiftCardNotificationProviderOutcome"]:c2(),["MerchantWebhookEnvelope"]:c3(),["SharedCodec197"]:c4(),["SharedCodec272"]:c5(),["SharedCodec273"]:c6(),["SharedCodec275"]:c7(),["Webhook_gift_card_notification_created_merchant"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_gift_card_notification_created_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
