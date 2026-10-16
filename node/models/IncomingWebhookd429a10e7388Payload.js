import { d1460 as c0, d898 as c1, d500 as c2, d897 as c3, d2635 as c4 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d1460 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1460;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookd429a10e7388Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["SharedCodec176"]:c2(),["SharedCodec250"]:c3(),["Webhook_payout_failed_merchant"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookd429a10e7388Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
