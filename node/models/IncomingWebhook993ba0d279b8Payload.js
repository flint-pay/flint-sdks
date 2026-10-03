import { d1312 as c0, d911 as c1, d919 as c2, d517 as c3, d910 as c4, d918 as c5, d1308 as c6, d1310 as c7, d1311 as c8, d1309 as c9 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d1312 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1312;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook993ba0d279b8Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec197"]:c3(),["SharedCodec275"]:c4(),["SharedCodec280"]:c5(),["SharedCodec367"]:c6(),["SharedCodec368"]:c7(),["Webhook_order_inventory_exception_created_installed_merchants"]:c8(),["Webhook_order_inventory_exception_created_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook993ba0d279b8Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
