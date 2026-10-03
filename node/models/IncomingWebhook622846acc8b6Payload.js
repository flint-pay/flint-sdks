import { d1160 as c0, d909 as c1, d917 as c2, d515 as c3, d908 as c4, d916 as c5, d936 as c6, d937 as c7, d941 as c8, d1156 as c9, d1158 as c10, d1159 as c11, d1157 as c12 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d1160 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1160;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook622846acc8b6Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec197"]:c3(),["SharedCodec275"]:c4(),["SharedCodec280"]:c5(),["SharedCodec289"]:c6(),["SharedCodec290"]:c7(),["SharedCodec294"]:c8(),["SharedCodec337"]:c9(),["SharedCodec338"]:c10(),["Webhook_order_fulfillment_shipment_created_installed_merchants"]:c11(),["Webhook_order_fulfillment_shipment_created_merchant"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook622846acc8b6Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
