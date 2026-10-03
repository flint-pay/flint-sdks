import { d1297 as c0, d911 as c1, d919 as c2, d517 as c3, d910 as c4, d918 as c5, d922 as c6, d938 as c7, d939 as c8, d942 as c9, d940 as c10, d941 as c11, d943 as c12, d1293 as c13, d1292 as c14, d1295 as c15, d1296 as c16, d1294 as c17 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d1297 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1297;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook96e4efc9dab0Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec197"]:c3(),["SharedCodec275"]:c4(),["SharedCodec280"]:c5(),["SharedCodec282"]:c6(),["SharedCodec289"]:c7(),["SharedCodec290"]:c8(),["SharedCodec291"]:c9(),["SharedCodec292"]:c10(),["SharedCodec293"]:c11(),["SharedCodec294"]:c12(),["SharedCodec360"]:c13(),["SharedCodec361"]:c14(),["SharedCodec362"]:c15(),["Webhook_order_fulfillment_package_updated_installed_merchants"]:c16(),["Webhook_order_fulfillment_package_updated_merchant"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook96e4efc9dab0Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
