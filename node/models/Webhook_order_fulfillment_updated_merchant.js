import { d898 as c0, d500 as c1, d897 as c2, d922 as c3, d923 as c4, d1025 as c5, d1026 as c6 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d1026 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1026;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["SharedCodec176"]:c1(),["SharedCodec250"]:c2(),["SharedCodec261"]:c3(),["SharedCodec262"]:c4(),["SharedCodec288"]:c5(),["Webhook_order_fulfillment_updated_merchant"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_fulfillment_updated_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
