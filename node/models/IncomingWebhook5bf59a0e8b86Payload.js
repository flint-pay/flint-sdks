import { d1148 as c0, d893 as c1, d901 as c2, d490 as c3, d892 as c4, d900 as c5, d1144 as c6, d1146 as c7, d1147 as c8, d1145 as c9 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d1148 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1148;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook5bf59a0e8b86Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec170"]:c3(),["SharedCodec246"]:c4(),["SharedCodec251"]:c5(),["SharedCodec310"]:c6(),["SharedCodec311"]:c7(),["Webhook_customer_deletion_requested_installed_merchants"]:c8(),["Webhook_customer_deletion_requested_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook5bf59a0e8b86Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
