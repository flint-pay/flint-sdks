import { d1277 as c0, d909 as c1, d917 as c2, d515 as c3, d908 as c4, d916 as c5, d1273 as c6, d1275 as c7, d1276 as c8, d1274 as c9 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d1277 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1277;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook9123c6d282f9Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec197"]:c3(),["SharedCodec275"]:c4(),["SharedCodec280"]:c5(),["SharedCodec355"]:c6(),["SharedCodec356"]:c7(),["Webhook_subscription_renewal_upcoming_installed_merchants"]:c8(),["Webhook_subscription_renewal_upcoming_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook9123c6d282f9Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
