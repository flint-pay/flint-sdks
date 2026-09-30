import { d899 as c0, d815 as c1, d823 as c2, d468 as c3, d814 as c4, d822 as c5, d885 as c6, d898 as c7, d897 as c8 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d899 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d899;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook2100acf09455Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec176"]:c3(),["SharedCodec244"]:c4(),["SharedCodec249"]:c5(),["SharedCodec275"]:c6(),["Webhook_order_payment_authorized_installed_merchants"]:c7(),["Webhook_order_payment_authorized_merchant"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook2100acf09455Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
