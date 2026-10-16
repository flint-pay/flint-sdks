import { d689 as c0, d323 as c1, d903 as c2, d66 as c3, d902 as c4, d1271 as c5, d2355 as c6, d2364 as c7, d2365 as c8, d2372 as c9, d1272 as c10 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d1272 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1272;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRecipientResource"]:c0(),["MoneyValue"]:c1(),["PartnerWebhookEnvelope"]:c2(),["PostalAddress"]:c3(),["SharedCodec252"]:c4(),["SharedCodec334"]:c5(),["SubscriptionAddressVerification"]:c6(),["SubscriptionDelivery"]:c7(),["SubscriptionDeliveryDestination"]:c8(),["SubscriptionDeliveryMethodSummary"]:c9(),["Webhook_subscription_delivery_updated_installed_merchants"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_subscription_delivery_updated_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
