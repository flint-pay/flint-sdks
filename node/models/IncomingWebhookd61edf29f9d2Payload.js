import { d1468 as c0, d898 as c1, d903 as c2, d500 as c3, d897 as c4, d902 as c5, d934 as c6, d1467 as c7, d1466 as c8 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1468 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1468;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookd61edf29f9d2Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec176"]:c3(),["SharedCodec250"]:c4(),["SharedCodec252"]:c5(),["SharedCodec268"]:c6(),["Webhook_delivery_zone_archived_installed_merchants"]:c7(),["Webhook_delivery_zone_archived_merchant"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookd61edf29f9d2Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
