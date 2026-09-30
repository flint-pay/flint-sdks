import { d1072 as c0, d815 as c1, d468 as c2, d814 as c3, d2334 as c4 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1072 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1072;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook6f55e77725f4Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["SharedCodec176"]:c2(),["SharedCodec244"]:c3(),["Webhook_inventory_reservation_closed_merchant"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook6f55e77725f4Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
