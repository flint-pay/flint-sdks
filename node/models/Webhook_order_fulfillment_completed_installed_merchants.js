import { d903 as c0, d902 as c1, d922 as c2, d923 as c3, d1027 as c4, d1441 as c5 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d1441 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1441;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec252"]:c1(),["SharedCodec261"]:c2(),["SharedCodec262"]:c3(),["SharedCodec289"]:c4(),["Webhook_order_fulfillment_completed_installed_merchants"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_fulfillment_completed_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
