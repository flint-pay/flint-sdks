import { d965 as c0, d898 as c1, d903 as c2, d500 as c3, d897 as c4, d902 as c5, d961 as c6, d963 as c7, d964 as c8, d962 as c9 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d965 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d965;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook155e0b06aa8fPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec176"]:c3(),["SharedCodec250"]:c4(),["SharedCodec252"]:c5(),["SharedCodec276"]:c6(),["SharedCodec277"]:c7(),["Webhook_invoice_paid_installed_merchants"]:c8(),["Webhook_invoice_paid_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook155e0b06aa8fPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
