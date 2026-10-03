import { d1427 as c0, d911 as c1, d919 as c2, d517 as c3, d910 as c4, d918 as c5, d977 as c6, d979 as c7, d1426 as c8, d1425 as c9 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d1427 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1427;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookce317e37a514Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec197"]:c3(),["SharedCodec275"]:c4(),["SharedCodec280"]:c5(),["SharedCodec304"]:c6(),["SharedCodec305"]:c7(),["Webhook_invoice_refunded_installed_merchants"]:c8(),["Webhook_invoice_refunded_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookce317e37a514Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
