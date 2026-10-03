import { d1222 as c0, d911 as c1, d74 as c2, d919 as c3, d517 as c4, d910 as c5, d918 as c6, d1215 as c7, d1217 as c8, d1221 as c9, d1220 as c10 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d1222 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1222;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook769913a11504Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["MoneyValue"]:c2(),["PartnerWebhookEnvelope"]:c3(),["SharedCodec197"]:c4(),["SharedCodec275"]:c5(),["SharedCodec280"]:c6(),["SharedCodec347"]:c7(),["SharedCodec348"]:c8(),["Webhook_invoice_late_fee_assessed_installed_merchants"]:c9(),["Webhook_invoice_late_fee_assessed_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook769913a11504Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
