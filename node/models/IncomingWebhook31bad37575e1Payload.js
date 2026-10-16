import { d1045 as c0, d898 as c1, d500 as c2, d897 as c3, d2601 as c4 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d1045 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1045;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook31bad37575e1Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["SharedCodec176"]:c2(),["SharedCodec250"]:c3(),["Webhook_inventory_action_required_merchant"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook31bad37575e1Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
