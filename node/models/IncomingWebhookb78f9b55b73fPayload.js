import { d517 as c0, d519 as c1, d524 as c2, d1403 as c3, d898 as c4, d500 as c5, d518 as c6, d897 as c7, d2592 as c8 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1403 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1403;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomDomainStatus"]:c0(),["CustomDomainStatusChange"]:c1(),["CustomerAccountDNSRecord"]:c2(),["IncomingWebhookb78f9b55b73fPayload"]:c3(),["MerchantWebhookEnvelope"]:c4(),["SharedCodec176"]:c5(),["SharedCodec179"]:c6(),["SharedCodec250"]:c7(),["Webhook_custom_domain_status_changed_merchant"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookb78f9b55b73fPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
