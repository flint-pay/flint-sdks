import { d957 as c0, d815 as c1, d823 as c2, d468 as c3, d814 as c4, d822 as c5, d953 as c6, d955 as c7, d956 as c8, d954 as c9 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d957 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d957;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook32b1c5e66db2Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec176"]:c3(),["SharedCodec244"]:c4(),["SharedCodec249"]:c5(),["SharedCodec286"]:c6(),["SharedCodec287"]:c7(),["Webhook_subscription_payment_failed_installed_merchants"]:c8(),["Webhook_subscription_payment_failed_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook32b1c5e66db2Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
