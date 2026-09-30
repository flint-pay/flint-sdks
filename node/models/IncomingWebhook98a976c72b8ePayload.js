import { d1177 as c0, d815 as c1, d823 as c2, d468 as c3, d814 as c4, d822 as c5, d1173 as c6, d1175 as c7, d1176 as c8, d1174 as c9 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1177 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1177;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook98a976c72b8ePayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec176"]:c3(),["SharedCodec244"]:c4(),["SharedCodec249"]:c5(),["SharedCodec324"]:c6(),["SharedCodec325"]:c7(),["Webhook_payment_method_removed_installed_merchants"]:c8(),["Webhook_payment_method_removed_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook98a976c72b8ePayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
