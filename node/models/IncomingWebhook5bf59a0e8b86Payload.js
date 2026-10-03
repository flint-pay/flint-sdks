import { d1146 as c0, d909 as c1, d917 as c2, d515 as c3, d908 as c4, d916 as c5, d1142 as c6, d1144 as c7, d1145 as c8, d1143 as c9 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d1146 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1146;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook5bf59a0e8b86Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec197"]:c3(),["SharedCodec275"]:c4(),["SharedCodec280"]:c5(),["SharedCodec333"]:c6(),["SharedCodec334"]:c7(),["Webhook_customer_deletion_requested_installed_merchants"]:c8(),["Webhook_customer_deletion_requested_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook5bf59a0e8b86Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
