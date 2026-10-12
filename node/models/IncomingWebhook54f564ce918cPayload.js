import { d1130 as c0, d893 as c1, d490 as c2, d892 as c3, d895 as c4, d1129 as c5, d2602 as c6 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { d1130 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1130;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook54f564ce918cPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["SharedCodec170"]:c2(),["SharedCodec246"]:c3(),["SharedCodec249"]:c4(),["SharedCodec309"]:c5(),["Webhook_merchant_billing_balance_updated_merchant"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook54f564ce918cPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
