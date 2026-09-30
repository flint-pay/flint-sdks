import { d887 as c0, d815 as c1, d823 as c2, d468 as c3, d814 as c4, d822 as c5, d885 as c6, d886 as c7, d884 as c8 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d887 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d887;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook18deb3ad40c4Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec176"]:c3(),["SharedCodec244"]:c4(),["SharedCodec249"]:c5(),["SharedCodec275"]:c6(),["Webhook_order_payment_captured_installed_merchants"]:c7(),["Webhook_order_payment_captured_merchant"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook18deb3ad40c4Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
