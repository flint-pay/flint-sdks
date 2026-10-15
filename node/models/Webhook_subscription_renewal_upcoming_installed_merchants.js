import { d689 as c0, d323 as c1, d903 as c2, d66 as c3, d902 as c4, d1292 as c5, d2355 as c6, d2364 as c7, d2365 as c8, d2372 as c9, d1293 as c10 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1293 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1293;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRecipientResource"]:c0(),["MoneyValue"]:c1(),["PartnerWebhookEnvelope"]:c2(),["PostalAddress"]:c3(),["SharedCodec252"]:c4(),["SharedCodec338"]:c5(),["SubscriptionAddressVerification"]:c6(),["SubscriptionDelivery"]:c7(),["SubscriptionDeliveryDestination"]:c8(),["SubscriptionDeliveryMethodSummary"]:c9(),["Webhook_subscription_renewal_upcoming_installed_merchants"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_subscription_renewal_upcoming_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
