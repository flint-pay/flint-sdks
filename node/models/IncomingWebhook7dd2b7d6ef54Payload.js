import { d1257 as c0, d893 as c1, d490 as c2, d892 as c3, d2615 as c4 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d1257 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1257;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook7dd2b7d6ef54Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["SharedCodec170"]:c2(),["SharedCodec246"]:c3(),["Webhook_payout_destination_created_merchant"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook7dd2b7d6ef54Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
