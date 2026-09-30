import { d1071 as c0, d815 as c1, d823 as c2, d468 as c3, d814 as c4, d822 as c5, d1067 as c6, d1069 as c7, d1070 as c8, d1068 as c9 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1071 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1071;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook6e888acafb4bPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec176"]:c3(),["SharedCodec244"]:c4(),["SharedCodec249"]:c5(),["SharedCodec304"]:c6(),["SharedCodec305"]:c7(),["Webhook_checkout_session_closed_installed_merchants"]:c8(),["Webhook_checkout_session_closed_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook6e888acafb4bPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
