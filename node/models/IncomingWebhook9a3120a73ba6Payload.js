import { d1329 as c0, d893 as c1, d490 as c2, d892 as c3, d2600 as c4 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d1329 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1329;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook9a3120a73ba6Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["SharedCodec170"]:c2(),["SharedCodec246"]:c3(),["Webhook_inventory_transfer_received_merchant"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook9a3120a73ba6Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
