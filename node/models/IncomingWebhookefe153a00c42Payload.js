import { d1526 as c0, d893 as c1, d901 as c2, d490 as c3, d892 as c4, d897 as c5, d896 as c6, d895 as c7, d899 as c8, d900 as c9, d1525 as c10, d1524 as c11 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d1526 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1526;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookefe153a00c42Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec170"]:c3(),["SharedCodec246"]:c4(),["SharedCodec247"]:c5(),["SharedCodec248"]:c6(),["SharedCodec249"]:c7(),["SharedCodec250"]:c8(),["SharedCodec251"]:c9(),["Webhook_payment_intent_canceled_installed_merchants"]:c10(),["Webhook_payment_intent_canceled_merchant"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookefe153a00c42Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
