import { d1250 as c0, d909 as c1, d917 as c2, d515 as c3, d908 as c4, d916 as c5, d987 as c6, d1249 as c7, d1248 as c8 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d1250 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1250;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook8061fc32f027Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec197"]:c3(),["SharedCodec275"]:c4(),["SharedCodec280"]:c5(),["SharedCodec308"]:c6(),["Webhook_order_payment_authorization_expired_installed_merchants"]:c7(),["Webhook_order_payment_authorization_expired_merchant"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook8061fc32f027Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
