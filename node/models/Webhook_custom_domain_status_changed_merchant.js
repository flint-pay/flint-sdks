import { d517 as c0, d519 as c1, d524 as c2, d898 as c3, d500 as c4, d518 as c5, d897 as c6, d2592 as c7 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d2592 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2592;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomDomainStatus"]:c0(),["CustomDomainStatusChange"]:c1(),["CustomerAccountDNSRecord"]:c2(),["MerchantWebhookEnvelope"]:c3(),["SharedCodec176"]:c4(),["SharedCodec179"]:c5(),["SharedCodec250"]:c6(),["Webhook_custom_domain_status_changed_merchant"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_custom_domain_status_changed_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
