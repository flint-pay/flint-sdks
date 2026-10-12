import { d1479 as c0, d893 as c1, d490 as c2, d892 as c3, d2599 as c4 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { d1479 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1479;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookdb9dd209977aPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["SharedCodec170"]:c2(),["SharedCodec246"]:c3(),["Webhook_inventory_transfer_lost_merchant"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookdb9dd209977aPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
