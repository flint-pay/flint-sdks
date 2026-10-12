import { d1085 as c0, d893 as c1, d490 as c2, d892 as c3, d2586 as c4 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { d1085 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1085;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook3dbc0a577678Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["SharedCodec170"]:c2(),["SharedCodec246"]:c3(),["Webhook_inventory_count_applied_merchant"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook3dbc0a577678Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
