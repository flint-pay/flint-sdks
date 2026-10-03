import { d1035 as c0, d911 as c1, d919 as c2, d517 as c3, d910 as c4, d918 as c5, d950 as c6, d1034 as c7, d1033 as c8 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d1035 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1035;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook28c5dc1777e5Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec197"]:c3(),["SharedCodec275"]:c4(),["SharedCodec280"]:c5(),["SharedCodec296"]:c6(),["Webhook_delivery_zone_updated_installed_merchants"]:c7(),["Webhook_delivery_zone_updated_merchant"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook28c5dc1777e5Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
