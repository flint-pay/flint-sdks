import { d1110 as c0, d911 as c1, d919 as c2, d517 as c3, d910 as c4, d918 as c5, d1106 as c6, d1105 as c7, d1108 as c8, d1109 as c9, d1107 as c10 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d1110 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1110;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook44764240a51fPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec197"]:c3(),["SharedCodec275"]:c4(),["SharedCodec280"]:c5(),["SharedCodec326"]:c6(),["SharedCodec327"]:c7(),["SharedCodec328"]:c8(),["Webhook_subscription_cancellation_scheduled_installed_merchants"]:c9(),["Webhook_subscription_cancellation_scheduled_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook44764240a51fPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
