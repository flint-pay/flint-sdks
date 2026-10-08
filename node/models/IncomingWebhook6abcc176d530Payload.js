import { d1196 as c0, d893 as c1, d901 as c2, d490 as c3, d892 as c4, d900 as c5, d1192 as c6, d1194 as c7, d1195 as c8, d1193 as c9 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d1196 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1196;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook6abcc176d530Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec170"]:c3(),["SharedCodec246"]:c4(),["SharedCodec251"]:c5(),["SharedCodec320"]:c6(),["SharedCodec321"]:c7(),["Webhook_subscription_updated_installed_merchants"]:c8(),["Webhook_subscription_updated_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook6abcc176d530Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
