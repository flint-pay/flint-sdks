import { d975 as c0, d898 as c1, d903 as c2, d500 as c3, d897 as c4, d902 as c5, d973 as c6, d974 as c7, d972 as c8 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d975 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d975;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook18deb3ad40c4Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec176"]:c3(),["SharedCodec250"]:c4(),["SharedCodec252"]:c5(),["SharedCodec280"]:c6(),["Webhook_order_payment_captured_installed_merchants"]:c7(),["Webhook_order_payment_captured_merchant"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook18deb3ad40c4Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
