import { d1574 as c0, d893 as c1, d901 as c2, d490 as c3, d892 as c4, d900 as c5, d971 as c6, d1573 as c7, d1572 as c8 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d1574 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1574;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookfcf5fa4b1850Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec170"]:c3(),["SharedCodec246"]:c4(),["SharedCodec251"]:c5(),["SharedCodec279"]:c6(),["Webhook_order_payment_authorization_canceled_installed_merchants"]:c7(),["Webhook_order_payment_authorization_canceled_merchant"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookfcf5fa4b1850Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
