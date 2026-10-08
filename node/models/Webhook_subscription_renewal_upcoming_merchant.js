import { d679 as c0, d893 as c1, d323 as c2, d66 as c3, d490 as c4, d892 as c5, d1288 as c6, d2339 as c7, d2348 as c8, d2349 as c9, d2356 as c10, d1289 as c11 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d1289 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1289;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRecipientResource"]:c0(),["MerchantWebhookEnvelope"]:c1(),["MoneyValue"]:c2(),["PostalAddress"]:c3(),["SharedCodec170"]:c4(),["SharedCodec246"]:c5(),["SharedCodec336"]:c6(),["SubscriptionAddressVerification"]:c7(),["SubscriptionDelivery"]:c8(),["SubscriptionDeliveryDestination"]:c9(),["SubscriptionDeliveryMethodSummary"]:c10(),["Webhook_subscription_renewal_upcoming_merchant"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_subscription_renewal_upcoming_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
