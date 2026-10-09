import { d1287 as c0, d893 as c1, d901 as c2, d490 as c3, d892 as c4, d895 as c5, d900 as c6, d1278 as c7, d1280 as c8, d1286 as c9, d1285 as c10 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d1287 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1287;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook90c487338917Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec170"]:c3(),["SharedCodec246"]:c4(),["SharedCodec249"]:c5(),["SharedCodec251"]:c6(),["SharedCodec334"]:c7(),["SharedCodec335"]:c8(),["Webhook_invoice_created_installed_merchants"]:c9(),["Webhook_invoice_created_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook90c487338917Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
