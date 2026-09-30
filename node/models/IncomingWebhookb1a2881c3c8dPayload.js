import { d1242 as c0, d815 as c1, d823 as c2, d468 as c3, d814 as c4, d822 as c5, d1240 as c6, d1241 as c7, d1239 as c8 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1242 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1242;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookb1a2881c3c8dPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec176"]:c3(),["SharedCodec244"]:c4(),["SharedCodec249"]:c5(),["SharedCodec342"]:c6(),["Webhook_checkout_session_completed_installed_merchants"]:c7(),["Webhook_checkout_session_completed_merchant"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookb1a2881c3c8dPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
