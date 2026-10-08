import { d679 as c0, d1271 as c1, d893 as c2, d323 as c3, d901 as c4, d66 as c5, d490 as c6, d892 as c7, d900 as c8, d1267 as c9, d1269 as c10, d2339 as c11, d2348 as c12, d2349 as c13, d2356 as c14, d1270 as c15, d1268 as c16 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d1271 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1271;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRecipientResource"]:c0(),["IncomingWebhook848c73c96bfaPayload"]:c1(),["MerchantWebhookEnvelope"]:c2(),["MoneyValue"]:c3(),["PartnerWebhookEnvelope"]:c4(),["PostalAddress"]:c5(),["SharedCodec170"]:c6(),["SharedCodec246"]:c7(),["SharedCodec251"]:c8(),["SharedCodec332"]:c9(),["SharedCodec333"]:c10(),["SubscriptionAddressVerification"]:c11(),["SubscriptionDelivery"]:c12(),["SubscriptionDeliveryDestination"]:c13(),["SubscriptionDeliveryMethodSummary"]:c14(),["Webhook_subscription_delivery_updated_installed_merchants"]:c15(),["Webhook_subscription_delivery_updated_merchant"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook848c73c96bfaPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
