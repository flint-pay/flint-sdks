import { d893 as c0, d490 as c1, d892 as c2, d920 as c3, d921 as c4, d925 as c5, d1158 as c6, d1159 as c7 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { d1159 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1159;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["SharedCodec170"]:c1(),["SharedCodec246"]:c2(),["SharedCodec260"]:c3(),["SharedCodec261"]:c4(),["SharedCodec265"]:c5(),["SharedCodec314"]:c6(),["Webhook_order_fulfillment_shipment_created_merchant"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_fulfillment_shipment_created_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
