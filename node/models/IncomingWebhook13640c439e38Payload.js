import { d868 as c0, d815 as c1, d823 as c2, d468 as c3, d814 as c4, d817 as c5, d822 as c6, d864 as c7, d866 as c8, d867 as c9, d865 as c10 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d868 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d868;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook13640c439e38Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec176"]:c3(),["SharedCodec244"]:c4(),["SharedCodec247"]:c5(),["SharedCodec249"]:c6(),["SharedCodec268"]:c7(),["SharedCodec269"]:c8(),["Webhook_invoice_payment_attempt_canceled_installed_merchants"]:c9(),["Webhook_invoice_payment_attempt_canceled_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook13640c439e38Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
