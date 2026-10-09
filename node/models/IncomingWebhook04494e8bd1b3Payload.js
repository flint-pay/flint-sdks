import { d894 as c0, d893 as c1, d490 as c2, d892 as c3, d2581 as c4 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d894 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d894;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook04494e8bd1b3Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["SharedCodec170"]:c2(),["SharedCodec246"]:c3(),["Webhook_dispute_prevented_merchant"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook04494e8bd1b3Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
