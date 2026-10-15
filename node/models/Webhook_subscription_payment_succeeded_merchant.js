import { d689 as c0, d898 as c1, d323 as c2, d66 as c3, d500 as c4, d897 as c5, d1055 as c6, d2355 as c7, d2364 as c8, d2365 as c9, d2372 as c10, d1056 as c11 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1056 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1056;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRecipientResource"]:c0(),["MerchantWebhookEnvelope"]:c1(),["MoneyValue"]:c2(),["PostalAddress"]:c3(),["SharedCodec176"]:c4(),["SharedCodec250"]:c5(),["SharedCodec295"]:c6(),["SubscriptionAddressVerification"]:c7(),["SubscriptionDelivery"]:c8(),["SubscriptionDeliveryDestination"]:c9(),["SubscriptionDeliveryMethodSummary"]:c10(),["Webhook_subscription_payment_succeeded_merchant"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_subscription_payment_succeeded_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
