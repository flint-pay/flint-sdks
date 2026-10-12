import { d679 as c0, d323 as c1, d901 as c2, d66 as c3, d900 as c4, d1290 as c5, d2339 as c6, d2348 as c7, d2349 as c8, d2356 as c9, d1291 as c10 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { d1291 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1291;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRecipientResource"]:c0(),["MoneyValue"]:c1(),["PartnerWebhookEnvelope"]:c2(),["PostalAddress"]:c3(),["SharedCodec251"]:c4(),["SharedCodec337"]:c5(),["SubscriptionAddressVerification"]:c6(),["SubscriptionDelivery"]:c7(),["SubscriptionDeliveryDestination"]:c8(),["SubscriptionDeliveryMethodSummary"]:c9(),["Webhook_subscription_renewal_upcoming_installed_merchants"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_subscription_renewal_upcoming_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
