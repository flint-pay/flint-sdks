import { d999 as c0, d893 as c1, d490 as c2, d892 as c3, d2598 as c4 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { d999 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d999;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook26154f9b0abbPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["SharedCodec170"]:c2(),["SharedCodec246"]:c3(),["Webhook_inventory_transfer_departed_merchant"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook26154f9b0abbPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
