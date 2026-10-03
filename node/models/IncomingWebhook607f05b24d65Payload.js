import { d1157 as c0, d911 as c1, d919 as c2, d517 as c3, d910 as c4, d918 as c5, d1155 as c6, d1156 as c7, d1154 as c8 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d1157 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1157;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook607f05b24d65Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec197"]:c3(),["SharedCodec275"]:c4(),["SharedCodec280"]:c5(),["SharedCodec336"]:c6(),["Webhook_customer_created_installed_merchants"]:c7(),["Webhook_customer_created_merchant"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook607f05b24d65Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
