import { d898 as c0, d500 as c1, d897 as c2, d922 as c3, d923 as c4, d927 as c5, d1160 as c6, d1161 as c7 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d1161 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1161;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["SharedCodec176"]:c1(),["SharedCodec250"]:c2(),["SharedCodec261"]:c3(),["SharedCodec262"]:c4(),["SharedCodec266"]:c5(),["SharedCodec315"]:c6(),["Webhook_order_fulfillment_shipment_created_merchant"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_fulfillment_shipment_created_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
