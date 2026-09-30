import { d882 as c0, d815 as c1, d823 as c2, d468 as c3, d814 as c4, d822 as c5, d878 as c6, d880 as c7, d881 as c8, d879 as c9 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d882 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d882;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook172f57408f3aPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec176"]:c3(),["SharedCodec244"]:c4(),["SharedCodec249"]:c5(),["SharedCodec273"]:c6(),["SharedCodec274"]:c7(),["Webhook_checkout_session_invalidated_installed_merchants"]:c8(),["Webhook_checkout_session_invalidated_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook172f57408f3aPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
