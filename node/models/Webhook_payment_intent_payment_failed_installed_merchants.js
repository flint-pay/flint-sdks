import { d901 as c0, d896 as c1, d895 as c2, d899 as c3, d900 as c4, d1409 as c5 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { d1409 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1409;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec248"]:c1(),["SharedCodec249"]:c2(),["SharedCodec250"]:c3(),["SharedCodec251"]:c4(),["Webhook_payment_intent_payment_failed_installed_merchants"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_payment_intent_payment_failed_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
