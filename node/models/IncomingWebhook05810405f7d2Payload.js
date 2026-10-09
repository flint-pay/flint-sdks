import { d909 as c0, d893 as c1, d901 as c2, d490 as c3, d892 as c4, d900 as c5, d905 as c6, d904 as c7, d907 as c8, d908 as c9, d906 as c10 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d909 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d909;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook05810405f7d2Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec170"]:c3(),["SharedCodec246"]:c4(),["SharedCodec251"]:c5(),["SharedCodec252"]:c6(),["SharedCodec253"]:c7(),["SharedCodec254"]:c8(),["Webhook_order_fulfillment_event_created_installed_merchants"]:c9(),["Webhook_order_fulfillment_event_created_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook05810405f7d2Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
