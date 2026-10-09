import { d1048 as c0, d893 as c1, d901 as c2, d490 as c3, d892 as c4, d900 as c5, d1044 as c6, d1046 as c7, d1047 as c8, d1045 as c9 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d1048 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1048;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook32b1c5e66db2Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec170"]:c3(),["SharedCodec246"]:c4(),["SharedCodec251"]:c5(),["SharedCodec292"]:c6(),["SharedCodec293"]:c7(),["Webhook_subscription_payment_failed_installed_merchants"]:c8(),["Webhook_subscription_payment_failed_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook32b1c5e66db2Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
