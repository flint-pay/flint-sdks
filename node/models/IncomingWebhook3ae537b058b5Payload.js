import { d1076 as c0, d909 as c1, d917 as c2, d515 as c3, d908 as c4, d916 as c5, d948 as c6, d1075 as c7, d1074 as c8 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d1076 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1076;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook3ae537b058b5Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec197"]:c3(),["SharedCodec275"]:c4(),["SharedCodec280"]:c5(),["SharedCodec296"]:c6(),["Webhook_delivery_method_created_installed_merchants"]:c7(),["Webhook_delivery_method_created_merchant"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook3ae537b058b5Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
