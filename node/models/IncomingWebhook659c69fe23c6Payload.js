import { d1178 as c0, d911 as c1, d919 as c2, d517 as c3, d910 as c4, d918 as c5, d1174 as c6, d1176 as c7, d1177 as c8, d1175 as c9 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d1178 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1178;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook659c69fe23c6Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec197"]:c3(),["SharedCodec275"]:c4(),["SharedCodec280"]:c5(),["SharedCodec341"]:c6(),["SharedCodec342"]:c7(),["Webhook_payment_method_failed_installed_merchants"]:c8(),["Webhook_payment_method_failed_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook659c69fe23c6Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
