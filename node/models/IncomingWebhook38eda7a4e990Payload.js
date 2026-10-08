import { d1066 as c0, d893 as c1, d901 as c2, d490 as c3, d892 as c4, d900 as c5, d947 as c6, d1065 as c7, d1064 as c8 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d1066 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1066;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook38eda7a4e990Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec170"]:c3(),["SharedCodec246"]:c4(),["SharedCodec251"]:c5(),["SharedCodec271"]:c6(),["Webhook_subscription_activated_installed_merchants"]:c7(),["Webhook_subscription_activated_merchant"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook38eda7a4e990Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
