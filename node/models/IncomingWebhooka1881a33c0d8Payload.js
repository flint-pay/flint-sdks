import { d1200 as c0, d815 as c1, d823 as c2, d468 as c3, d814 as c4, d817 as c5, d822 as c6, d1196 as c7, d1198 as c8, d1199 as c9, d1197 as c10 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1200 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1200;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhooka1881a33c0d8Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec176"]:c3(),["SharedCodec244"]:c4(),["SharedCodec247"]:c5(),["SharedCodec249"]:c6(),["SharedCodec328"]:c7(),["SharedCodec329"]:c8(),["Webhook_invoice_credited_installed_merchants"]:c9(),["Webhook_invoice_credited_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhooka1881a33c0d8Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
