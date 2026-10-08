import { d1412 as c0, d893 as c1, d490 as c2, d892 as c3, d2594 as c4 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d1412 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1412;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookbec68ec6ef2ePayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["SharedCodec170"]:c2(),["SharedCodec246"]:c3(),["Webhook_inventory_reservation_hold_expired_merchant"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookbec68ec6ef2ePayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
