import { d1301 as c0, d893 as c1, d901 as c2, d490 as c3, d892 as c4, d900 as c5, d920 as c6, d921 as c7, d1297 as c8, d1296 as c9, d1299 as c10, d1300 as c11, d1298 as c12 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d1301 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1301;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook968a85236406Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec170"]:c3(),["SharedCodec246"]:c4(),["SharedCodec251"]:c5(),["SharedCodec260"]:c6(),["SharedCodec261"]:c7(),["SharedCodec338"]:c8(),["SharedCodec339"]:c9(),["SharedCodec340"]:c10(),["Webhook_order_fulfillment_status_changed_installed_merchants"]:c11(),["Webhook_order_fulfillment_status_changed_merchant"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook968a85236406Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
