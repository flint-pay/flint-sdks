import { d542 as c0, d544 as c1, d550 as c2, d1413 as c3, d930 as c4, d525 as c5, d543 as c6, d929 as c7, d2534 as c8 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d1413 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1413;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomDomainStatus"]:c0(),["CustomDomainStatusChange"]:c1(),["CustomerAccountDNSRecord"]:c2(),["IncomingWebhookb78f9b55b73fPayload"]:c3(),["MerchantWebhookEnvelope"]:c4(),["SharedCodec199"]:c5(),["SharedCodec202"]:c6(),["SharedCodec282"]:c7(),["Webhook_custom_domain_status_changed_merchant"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookb78f9b55b73fPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
