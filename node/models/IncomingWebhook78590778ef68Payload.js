import { d1238 as c0, d898 as c1, d903 as c2, d500 as c3, d897 as c4, d902 as c5, d1157 as c6, d1237 as c7, d1236 as c8 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1238 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1238;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook78590778ef68Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec176"]:c3(),["SharedCodec250"]:c4(),["SharedCodec252"]:c5(),["SharedCodec314"]:c6(),["Webhook_customer_updated_installed_merchants"]:c7(),["Webhook_customer_updated_merchant"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook78590778ef68Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
