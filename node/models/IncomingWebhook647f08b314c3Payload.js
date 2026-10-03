import { d1171 as c0, d909 as c1, d917 as c2, d515 as c3, d908 as c4, d916 as c5, d948 as c6, d1170 as c7, d1169 as c8 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d1171 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1171;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook647f08b314c3Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec197"]:c3(),["SharedCodec275"]:c4(),["SharedCodec280"]:c5(),["SharedCodec296"]:c6(),["Webhook_delivery_rate_callback_deactivated_installed_merchants"]:c7(),["Webhook_delivery_rate_callback_deactivated_merchant"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook647f08b314c3Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
