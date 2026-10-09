import { d679 as c0, d323 as c1, d901 as c2, d66 as c3, d900 as c4, d1055 as c5, d2339 as c6, d2348 as c7, d2349 as c8, d2356 as c9, d1056 as c10 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d1056 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1056;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRecipientResource"]:c0(),["MoneyValue"]:c1(),["PartnerWebhookEnvelope"]:c2(),["PostalAddress"]:c3(),["SharedCodec251"]:c4(),["SharedCodec295"]:c5(),["SubscriptionAddressVerification"]:c6(),["SubscriptionDelivery"]:c7(),["SubscriptionDeliveryDestination"]:c8(),["SubscriptionDeliveryMethodSummary"]:c9(),["Webhook_subscription_payment_succeeded_installed_merchants"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_subscription_payment_succeeded_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
