import { d893 as c0, d490 as c1, d892 as c2, d897 as c3, d896 as c4, d895 as c5, d1476 as c6 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { d1476 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1476;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["SharedCodec170"]:c1(),["SharedCodec246"]:c2(),["SharedCodec247"]:c3(),["SharedCodec248"]:c4(),["SharedCodec249"]:c5(),["Webhook_payment_intent_processing_merchant"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_payment_intent_processing_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
