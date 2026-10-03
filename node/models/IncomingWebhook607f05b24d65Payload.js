import { d1155 as c0, d909 as c1, d917 as c2, d515 as c3, d908 as c4, d916 as c5, d1153 as c6, d1154 as c7, d1152 as c8 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d1155 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1155;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook607f05b24d65Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec197"]:c3(),["SharedCodec275"]:c4(),["SharedCodec280"]:c5(),["SharedCodec336"]:c6(),["Webhook_customer_created_installed_merchants"]:c7(),["Webhook_customer_created_merchant"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook607f05b24d65Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
