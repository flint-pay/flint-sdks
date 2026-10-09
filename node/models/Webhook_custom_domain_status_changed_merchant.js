import { d507 as c0, d509 as c1, d514 as c2, d893 as c3, d490 as c4, d508 as c5, d892 as c6, d2576 as c7 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d2576 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2576;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomDomainStatus"]:c0(),["CustomDomainStatusChange"]:c1(),["CustomerAccountDNSRecord"]:c2(),["MerchantWebhookEnvelope"]:c3(),["SharedCodec170"]:c4(),["SharedCodec173"]:c5(),["SharedCodec246"]:c6(),["Webhook_custom_domain_status_changed_merchant"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_custom_domain_status_changed_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
