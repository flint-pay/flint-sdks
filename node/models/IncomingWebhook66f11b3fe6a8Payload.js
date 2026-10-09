import { d1182 as c0, d893 as c1, d490 as c2, d892 as c3, d2577 as c4 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d1182 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1182;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook66f11b3fe6a8Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["SharedCodec170"]:c2(),["SharedCodec246"]:c3(),["Webhook_dispute_closed_merchant"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook66f11b3fe6a8Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
