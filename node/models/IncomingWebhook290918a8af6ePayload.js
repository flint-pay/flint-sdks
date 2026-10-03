import { d1043 as c0, d909 as c1, d917 as c2, d515 as c3, d908 as c4, d916 as c5, d936 as c6, d937 as c7, d1039 as c8, d1041 as c9, d1042 as c10, d1040 as c11 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d1043 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1043;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook290918a8af6ePayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec197"]:c3(),["SharedCodec275"]:c4(),["SharedCodec280"]:c5(),["SharedCodec289"]:c6(),["SharedCodec290"]:c7(),["SharedCodec316"]:c8(),["SharedCodec317"]:c9(),["Webhook_order_fulfillment_updated_installed_merchants"]:c10(),["Webhook_order_fulfillment_updated_merchant"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook290918a8af6ePayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
