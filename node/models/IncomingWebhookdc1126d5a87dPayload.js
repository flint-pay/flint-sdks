import { d1484 as c0, d893 as c1, d901 as c2, d490 as c3, d892 as c4, d900 as c5, d1480 as c6, d1482 as c7, d1483 as c8, d1481 as c9 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d1484 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1484;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookdc1126d5a87dPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec170"]:c3(),["SharedCodec246"]:c4(),["SharedCodec251"]:c5(),["SharedCodec371"]:c6(),["SharedCodec372"]:c7(),["Webhook_checkout_session_expired_installed_merchants"]:c8(),["Webhook_checkout_session_expired_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookdc1126d5a87dPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
