import { d1407 as c0, d893 as c1, d901 as c2, d490 as c3, d892 as c4, d900 as c5, d947 as c6, d1406 as c7, d1405 as c8 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d1407 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1407;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookbb439dd961a8Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec170"]:c3(),["SharedCodec246"]:c4(),["SharedCodec251"]:c5(),["SharedCodec271"]:c6(),["Webhook_subscription_past_due_installed_merchants"]:c7(),["Webhook_subscription_past_due_merchant"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookbb439dd961a8Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
