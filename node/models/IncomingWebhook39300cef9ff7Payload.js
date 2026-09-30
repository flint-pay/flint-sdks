import { d970 as c0, d815 as c1, d468 as c2, d814 as c3, d2319 as c4 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d970 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d970;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook39300cef9ff7Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["SharedCodec176"]:c2(),["SharedCodec244"]:c3(),["Webhook_balance_updated_merchant"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook39300cef9ff7Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
