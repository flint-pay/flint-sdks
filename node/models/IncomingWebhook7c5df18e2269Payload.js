import { d1241 as c0, d911 as c1, d919 as c2, d517 as c3, d910 as c4, d918 as c5, d1237 as c6, d1239 as c7, d1240 as c8, d1238 as c9 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d1241 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1241;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook7c5df18e2269Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec197"]:c3(),["SharedCodec275"]:c4(),["SharedCodec280"]:c5(),["SharedCodec351"]:c6(),["SharedCodec352"]:c7(),["Webhook_subscription_dunning_exhausted_installed_merchants"]:c8(),["Webhook_subscription_dunning_exhausted_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook7c5df18e2269Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
