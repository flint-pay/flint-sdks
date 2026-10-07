import { d1092 as c0, d930 as c1, d938 as c2, d525 as c3, d929 as c4, d937 as c5, d984 as c6, d1091 as c7, d1090 as c8 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d1092 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1092;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook38eda7a4e990Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec282"]:c4(),["SharedCodec287"]:c5(),["SharedCodec307"]:c6(),["Webhook_subscription_activated_installed_merchants"]:c7(),["Webhook_subscription_activated_merchant"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook38eda7a4e990Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
