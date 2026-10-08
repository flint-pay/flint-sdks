import { d1181 as c0, d893 as c1, d901 as c2, d490 as c3, d892 as c4, d900 as c5, d1177 as c6, d1179 as c7, d1180 as c8, d1178 as c9 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d1181 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1181;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook659c69fe23c6Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec170"]:c3(),["SharedCodec246"]:c4(),["SharedCodec251"]:c5(),["SharedCodec318"]:c6(),["SharedCodec319"]:c7(),["Webhook_payment_method_failed_installed_merchants"]:c8(),["Webhook_payment_method_failed_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook659c69fe23c6Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
