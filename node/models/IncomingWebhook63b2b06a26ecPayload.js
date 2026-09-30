import { d1037 as c0, d815 as c1, d823 as c2, d468 as c3, d814 as c4, d822 as c5, d1033 as c6, d1035 as c7, d1036 as c8, d1034 as c9 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1037 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1037;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook63b2b06a26ecPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec176"]:c3(),["SharedCodec244"]:c4(),["SharedCodec249"]:c5(),["SharedCodec298"]:c6(),["SharedCodec299"]:c7(),["Webhook_order_created_installed_merchants"]:c8(),["Webhook_order_created_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook63b2b06a26ecPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
