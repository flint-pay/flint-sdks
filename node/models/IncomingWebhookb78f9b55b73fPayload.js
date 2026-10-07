import { d486 as c0, d488 as c1, d493 as c2, d1356 as c3, d872 as c4, d469 as c5, d487 as c6, d871 as c7, d2486 as c8 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d1356 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1356;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomDomainStatus"]:c0(),["CustomDomainStatusChange"]:c1(),["CustomerAccountDNSRecord"]:c2(),["IncomingWebhookb78f9b55b73fPayload"]:c3(),["MerchantWebhookEnvelope"]:c4(),["SharedCodec161"]:c5(),["SharedCodec164"]:c6(),["SharedCodec237"]:c7(),["Webhook_custom_domain_status_changed_merchant"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookb78f9b55b73fPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
