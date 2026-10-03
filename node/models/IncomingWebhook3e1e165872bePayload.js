import { d1091 as c0, d911 as c1, d919 as c2, d517 as c3, d910 as c4, d915 as c5, d914 as c6, d913 as c7, d917 as c8, d918 as c9, d1090 as c10, d1089 as c11 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d1091 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1091;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook3e1e165872bePayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec197"]:c3(),["SharedCodec275"]:c4(),["SharedCodec276"]:c5(),["SharedCodec277"]:c6(),["SharedCodec278"]:c7(),["SharedCodec279"]:c8(),["SharedCodec280"]:c9(),["Webhook_payment_intent_requires_capture_installed_merchants"]:c10(),["Webhook_payment_intent_requires_capture_merchant"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook3e1e165872bePayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
