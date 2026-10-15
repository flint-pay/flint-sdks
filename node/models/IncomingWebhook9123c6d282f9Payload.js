import { d689 as c0, d1294 as c1, d898 as c2, d323 as c3, d903 as c4, d66 as c5, d500 as c6, d897 as c7, d902 as c8, d1290 as c9, d1292 as c10, d2355 as c11, d2364 as c12, d2365 as c13, d2372 as c14, d1293 as c15, d1291 as c16 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1294 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1294;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRecipientResource"]:c0(),["IncomingWebhook9123c6d282f9Payload"]:c1(),["MerchantWebhookEnvelope"]:c2(),["MoneyValue"]:c3(),["PartnerWebhookEnvelope"]:c4(),["PostalAddress"]:c5(),["SharedCodec176"]:c6(),["SharedCodec250"]:c7(),["SharedCodec252"]:c8(),["SharedCodec337"]:c9(),["SharedCodec338"]:c10(),["SubscriptionAddressVerification"]:c11(),["SubscriptionDelivery"]:c12(),["SubscriptionDeliveryDestination"]:c13(),["SubscriptionDeliveryMethodSummary"]:c14(),["Webhook_subscription_renewal_upcoming_installed_merchants"]:c15(),["Webhook_subscription_renewal_upcoming_merchant"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook9123c6d282f9Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
