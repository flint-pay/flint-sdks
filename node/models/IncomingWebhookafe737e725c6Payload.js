import { d1360 as c0, d911 as c1, d919 as c2, d517 as c3, d910 as c4, d913 as c5, d918 as c6, d1356 as c7, d1358 as c8, d1359 as c9, d1357 as c10 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d1360 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1360;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookafe737e725c6Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec197"]:c3(),["SharedCodec275"]:c4(),["SharedCodec278"]:c5(),["SharedCodec280"]:c6(),["SharedCodec376"]:c7(),["SharedCodec377"]:c8(),["Webhook_invoice_payment_failed_installed_merchants"]:c9(),["Webhook_invoice_payment_failed_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookafe737e725c6Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
