import { d689 as c0, d1059 as c1, d898 as c2, d323 as c3, d903 as c4, d66 as c5, d500 as c6, d897 as c7, d902 as c8, d1055 as c9, d1057 as c10, d2355 as c11, d2364 as c12, d2365 as c13, d2372 as c14, d1058 as c15, d1056 as c16 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d1059 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1059;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRecipientResource"]:c0(),["IncomingWebhook3573c4463034Payload"]:c1(),["MerchantWebhookEnvelope"]:c2(),["MoneyValue"]:c3(),["PartnerWebhookEnvelope"]:c4(),["PostalAddress"]:c5(),["SharedCodec176"]:c6(),["SharedCodec250"]:c7(),["SharedCodec252"]:c8(),["SharedCodec295"]:c9(),["SharedCodec296"]:c10(),["SubscriptionAddressVerification"]:c11(),["SubscriptionDelivery"]:c12(),["SubscriptionDeliveryDestination"]:c13(),["SubscriptionDeliveryMethodSummary"]:c14(),["Webhook_subscription_payment_succeeded_installed_merchants"]:c15(),["Webhook_subscription_payment_succeeded_merchant"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook3573c4463034Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
