import { d542 as c0, d544 as c1, d550 as c2, d930 as c3, d525 as c4, d543 as c5, d929 as c6, d2534 as c7 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d2534 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2534;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomDomainStatus"]:c0(),["CustomDomainStatusChange"]:c1(),["CustomerAccountDNSRecord"]:c2(),["MerchantWebhookEnvelope"]:c3(),["SharedCodec199"]:c4(),["SharedCodec202"]:c5(),["SharedCodec282"]:c6(),["Webhook_custom_domain_status_changed_merchant"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_custom_domain_status_changed_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
