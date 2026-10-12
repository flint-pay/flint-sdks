import { d893 as c0, d490 as c1, d892 as c2, d1044 as c3, d1045 as c4 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { d1045 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1045;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["SharedCodec170"]:c1(),["SharedCodec246"]:c2(),["SharedCodec292"]:c3(),["Webhook_subscription_payment_failed_merchant"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_subscription_payment_failed_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
