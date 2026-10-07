import { d486 as c0, d488 as c1, d493 as c2, d872 as c3, d469 as c4, d487 as c5, d871 as c6, d2486 as c7 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d2486 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2486;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomDomainStatus"]:c0(),["CustomDomainStatusChange"]:c1(),["CustomerAccountDNSRecord"]:c2(),["MerchantWebhookEnvelope"]:c3(),["SharedCodec161"]:c4(),["SharedCodec164"]:c5(),["SharedCodec237"]:c6(),["Webhook_custom_domain_status_changed_merchant"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_custom_domain_status_changed_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
