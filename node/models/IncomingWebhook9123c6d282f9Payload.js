import { d1149 as c0, d815 as c1, d823 as c2, d468 as c3, d814 as c4, d822 as c5, d1145 as c6, d1147 as c7, d1148 as c8, d1146 as c9 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1149 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1149;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook9123c6d282f9Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec176"]:c3(),["SharedCodec244"]:c4(),["SharedCodec249"]:c5(),["SharedCodec314"]:c6(),["SharedCodec315"]:c7(),["Webhook_subscription_renewal_upcoming_installed_merchants"]:c8(),["Webhook_subscription_renewal_upcoming_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook9123c6d282f9Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
