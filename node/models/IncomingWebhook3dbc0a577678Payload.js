import { d984 as c0, d815 as c1, d468 as c2, d814 as c3, d2330 as c4 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d984 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d984;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook3dbc0a577678Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["SharedCodec176"]:c2(),["SharedCodec244"]:c3(),["Webhook_inventory_count_applied_merchant"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook3dbc0a577678Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
