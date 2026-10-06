import { d900 as c0, d902 as c1, d938 as c2, d896 as c3, d897 as c4, d937 as c5, d1136 as c6, d1467 as c7 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { d1467 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1467;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardNotificationDeliveryAttempt"]:c0(),["GiftCardNotificationProviderOutcome"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec279"]:c3(),["SharedCodec280"]:c4(),["SharedCodec287"]:c5(),["SharedCodec337"]:c6(),["Webhook_gift_card_notification_created_installed_merchants"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_gift_card_notification_created_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
