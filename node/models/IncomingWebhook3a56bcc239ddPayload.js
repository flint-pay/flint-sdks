import { d1070 as c0, d898 as c1, d500 as c2, d897 as c3, d2622 as c4 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d1070 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1070;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook3a56bcc239ddPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["SharedCodec176"]:c2(),["SharedCodec250"]:c3(),["Webhook_order_inventory_action_required_merchant"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook3a56bcc239ddPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
