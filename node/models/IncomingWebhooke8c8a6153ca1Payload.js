import { d1497 as c0, d911 as c1, d919 as c2, d517 as c3, d910 as c4, d913 as c5, d918 as c6, d1493 as c7, d1495 as c8, d1496 as c9, d1494 as c10 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d1497 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1497;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhooke8c8a6153ca1Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec197"]:c3(),["SharedCodec275"]:c4(),["SharedCodec278"]:c5(),["SharedCodec280"]:c6(),["SharedCodec399"]:c7(),["SharedCodec400"]:c8(),["Webhook_invoice_payment_processing_installed_merchants"]:c9(),["Webhook_invoice_payment_processing_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhooke8c8a6153ca1Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
