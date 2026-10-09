import { d954 as c0, d893 as c1, d901 as c2, d490 as c3, d892 as c4, d895 as c5, d900 as c6, d950 as c7, d952 as c8, d953 as c9, d951 as c10 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d954 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d954;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook13640c439e38Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec170"]:c3(),["SharedCodec246"]:c4(),["SharedCodec249"]:c5(),["SharedCodec251"]:c6(),["SharedCodec272"]:c7(),["SharedCodec273"]:c8(),["Webhook_invoice_payment_attempt_canceled_installed_merchants"]:c9(),["Webhook_invoice_payment_attempt_canceled_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook13640c439e38Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
