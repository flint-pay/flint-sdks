import { d1195 as c0, d815 as c1, d823 as c2, d468 as c3, d814 as c4, d822 as c5, d850 as c6, d1194 as c7, d1193 as c8 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1195 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1195;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook9f970012f914Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec176"]:c3(),["SharedCodec244"]:c4(),["SharedCodec249"]:c5(),["SharedCodec264"]:c6(),["Webhook_delivery_rate_created_installed_merchants"]:c7(),["Webhook_delivery_rate_created_merchant"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook9f970012f914Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
