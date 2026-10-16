import { d1406 as c0, d898 as c1, d500 as c2, d897 as c3, d2629 as c4 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d1406 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1406;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookb9b1da5ab933Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["SharedCodec176"]:c2(),["SharedCodec250"]:c3(),["Webhook_payout_canceled_merchant"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookb9b1da5ab933Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
