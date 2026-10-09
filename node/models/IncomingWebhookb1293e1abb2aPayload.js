import { d1380 as c0, d893 as c1, d901 as c2, d490 as c3, d892 as c4, d900 as c5, d1376 as c6, d1378 as c7, d1379 as c8, d1377 as c9 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d1380 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1380;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookb1293e1abb2aPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec170"]:c3(),["SharedCodec246"]:c4(),["SharedCodec251"]:c5(),["SharedCodec358"]:c6(),["SharedCodec359"]:c7(),["Webhook_payment_method_saved_installed_merchants"]:c8(),["Webhook_payment_method_saved_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookb1293e1abb2aPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
