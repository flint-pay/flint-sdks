import { d901 as c0, d900 as c1, d1070 as c2, d2372 as c3, d2373 as c4, d1294 as c5 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d1294 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1294;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec251"]:c1(),["SharedCodec297"]:c2(),["SubscriptionPaymentRetry"]:c3(),["SubscriptionPaymentRetryFailure"]:c4(),["Webhook_subscription_payment_retry_created_installed_merchants"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_subscription_payment_retry_created_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
