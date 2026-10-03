import { d1119 as c0, d911 as c1, d517 as c2, d910 as c3, d2497 as c4 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d1119 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1119;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook498370f9652cPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["SharedCodec197"]:c2(),["SharedCodec275"]:c3(),["Webhook_dispute_created_merchant"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook498370f9652cPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
