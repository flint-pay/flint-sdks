import { d1365 as c0, d911 as c1, d919 as c2, d517 as c3, d910 as c4, d918 as c5, d1361 as c6, d1363 as c7, d1364 as c8, d1362 as c9 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d1365 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1365;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookb1293e1abb2aPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec197"]:c3(),["SharedCodec275"]:c4(),["SharedCodec280"]:c5(),["SharedCodec378"]:c6(),["SharedCodec379"]:c7(),["Webhook_payment_method_saved_installed_merchants"]:c8(),["Webhook_payment_method_saved_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookb1293e1abb2aPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
