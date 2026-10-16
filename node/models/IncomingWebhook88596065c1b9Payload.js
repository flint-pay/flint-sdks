import { d1274 as c0, d898 as c1, d500 as c2, d897 as c3, d2639 as c4 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d1274 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1274;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook88596065c1b9Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["SharedCodec176"]:c2(),["SharedCodec250"]:c3(),["Webhook_payout_updated_merchant"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook88596065c1b9Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
