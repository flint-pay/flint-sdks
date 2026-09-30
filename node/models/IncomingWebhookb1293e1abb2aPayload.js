import { d1232 as c0, d815 as c1, d823 as c2, d468 as c3, d814 as c4, d822 as c5, d1228 as c6, d1230 as c7, d1231 as c8, d1229 as c9 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1232 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1232;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookb1293e1abb2aPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec176"]:c3(),["SharedCodec244"]:c4(),["SharedCodec249"]:c5(),["SharedCodec337"]:c6(),["SharedCodec338"]:c7(),["Webhook_payment_method_saved_installed_merchants"]:c8(),["Webhook_payment_method_saved_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookb1293e1abb2aPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
