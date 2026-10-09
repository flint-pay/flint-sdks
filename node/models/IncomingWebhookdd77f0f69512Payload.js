import { d1490 as c0, d893 as c1, d901 as c2, d490 as c3, d892 as c4, d900 as c5, d959 as c6, d961 as c7, d1489 as c8, d1488 as c9 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d1490 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1490;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookdd77f0f69512Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec170"]:c3(),["SharedCodec246"]:c4(),["SharedCodec251"]:c5(),["SharedCodec275"]:c6(),["SharedCodec276"]:c7(),["Webhook_invoice_partially_refunded_installed_merchants"]:c8(),["Webhook_invoice_partially_refunded_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookdd77f0f69512Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
