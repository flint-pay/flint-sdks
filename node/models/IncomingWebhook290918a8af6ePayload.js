import { d1045 as c0, d911 as c1, d919 as c2, d517 as c3, d910 as c4, d918 as c5, d938 as c6, d939 as c7, d1041 as c8, d1043 as c9, d1044 as c10, d1042 as c11 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d1045 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1045;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook290918a8af6ePayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec197"]:c3(),["SharedCodec275"]:c4(),["SharedCodec280"]:c5(),["SharedCodec289"]:c6(),["SharedCodec290"]:c7(),["SharedCodec316"]:c8(),["SharedCodec317"]:c9(),["Webhook_order_fulfillment_updated_installed_merchants"]:c10(),["Webhook_order_fulfillment_updated_merchant"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook290918a8af6ePayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
