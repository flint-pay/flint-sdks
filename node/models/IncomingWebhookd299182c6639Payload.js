import { d879 as c0, d881 as c1, d883 as c2, d1439 as c3, d911 as c4, d919 as c5, d517 as c6, d877 as c7, d878 as c8, d910 as c9, d918 as c10, d1113 as c11, d1438 as c12, d1437 as c13 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d1439 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1439;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardNotification"]:c0(),["GiftCardNotificationDeliveryAttempt"]:c1(),["GiftCardNotificationProviderOutcome"]:c2(),["IncomingWebhookd299182c6639Payload"]:c3(),["MerchantWebhookEnvelope"]:c4(),["PartnerWebhookEnvelope"]:c5(),["SharedCodec197"]:c6(),["SharedCodec272"]:c7(),["SharedCodec273"]:c8(),["SharedCodec275"]:c9(),["SharedCodec280"]:c10(),["SharedCodec329"]:c11(),["Webhook_gift_card_notification_created_installed_merchants"]:c12(),["Webhook_gift_card_notification_created_merchant"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookd299182c6639Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
