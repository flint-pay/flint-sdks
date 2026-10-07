import { d543 as c0, d545 as c1, d551 as c2, d936 as c3, d526 as c4, d544 as c5, d935 as c6, d2541 as c7 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d2541 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2541;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomDomainStatus"]:c0(),["CustomDomainStatusChange"]:c1(),["CustomerAccountDNSRecord"]:c2(),["MerchantWebhookEnvelope"]:c3(),["SharedCodec199"]:c4(),["SharedCodec202"]:c5(),["SharedCodec286"]:c6(),["Webhook_custom_domain_status_changed_merchant"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_custom_domain_status_changed_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
