import { d1417 as c0, d898 as c1, d903 as c2, d500 as c3, d897 as c4, d902 as c5, d934 as c6, d1416 as c7, d1415 as c8 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1417 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1417;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookbfe731fc8c52Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec176"]:c3(),["SharedCodec250"]:c4(),["SharedCodec252"]:c5(),["SharedCodec268"]:c6(),["Webhook_return_receipt_superseded_installed_merchants"]:c7(),["Webhook_return_receipt_superseded_merchant"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookbfe731fc8c52Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
