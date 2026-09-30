import { d1275 as c0, d815 as c1, d823 as c2, d468 as c3, d814 as c4, d822 as c5, d873 as c6, d875 as c7, d1274 as c8, d1273 as c9 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1275 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1275;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookc71d9380e0c9Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec176"]:c3(),["SharedCodec244"]:c4(),["SharedCodec249"]:c5(),["SharedCodec271"]:c6(),["SharedCodec272"]:c7(),["Webhook_invoice_partially_paid_installed_merchants"]:c8(),["Webhook_invoice_partially_paid_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookc71d9380e0c9Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
