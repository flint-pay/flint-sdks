import { d1295 as c0, d909 as c1, d917 as c2, d515 as c3, d908 as c4, d916 as c5, d920 as c6, d936 as c7, d937 as c8, d940 as c9, d938 as c10, d939 as c11, d941 as c12, d1291 as c13, d1290 as c14, d1293 as c15, d1294 as c16, d1292 as c17 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d1295 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1295;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook96e4efc9dab0Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec197"]:c3(),["SharedCodec275"]:c4(),["SharedCodec280"]:c5(),["SharedCodec282"]:c6(),["SharedCodec289"]:c7(),["SharedCodec290"]:c8(),["SharedCodec291"]:c9(),["SharedCodec292"]:c10(),["SharedCodec293"]:c11(),["SharedCodec294"]:c12(),["SharedCodec360"]:c13(),["SharedCodec361"]:c14(),["SharedCodec362"]:c15(),["Webhook_order_fulfillment_package_updated_installed_merchants"]:c16(),["Webhook_order_fulfillment_package_updated_merchant"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook96e4efc9dab0Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
