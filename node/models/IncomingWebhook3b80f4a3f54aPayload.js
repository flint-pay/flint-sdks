import { d1081 as c0, d1803 as c1, d1804 as c2, d898 as c3, d323 as c4, d500 as c5, d897 as c6, d2620 as c7 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1081 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1081;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook3b80f4a3f54aPayload"]:c0(),["MerchantSubscriptionInvoice"]:c1(),["MerchantSubscriptionInvoiceLine"]:c2(),["MerchantWebhookEnvelope"]:c3(),["MoneyValue"]:c4(),["SharedCodec176"]:c5(),["SharedCodec250"]:c6(),["Webhook_merchant_subscription_invoice_issued_merchant"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook3b80f4a3f54aPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
