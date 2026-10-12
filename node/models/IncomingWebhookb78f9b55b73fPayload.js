import { d507 as c0, d509 as c1, d514 as c2, d1401 as c3, d893 as c4, d490 as c5, d508 as c6, d892 as c7, d2576 as c8 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { d1401 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1401;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomDomainStatus"]:c0(),["CustomDomainStatusChange"]:c1(),["CustomerAccountDNSRecord"]:c2(),["IncomingWebhookb78f9b55b73fPayload"]:c3(),["MerchantWebhookEnvelope"]:c4(),["SharedCodec170"]:c5(),["SharedCodec173"]:c6(),["SharedCodec246"]:c7(),["Webhook_custom_domain_status_changed_merchant"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookb78f9b55b73fPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
