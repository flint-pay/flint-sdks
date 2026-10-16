import { d898 as c0, d323 as c1, d500 as c2, d897 as c3, d1225 as c4, d1226 as c5 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d1226 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1226;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["MoneyValue"]:c1(),["SharedCodec176"]:c2(),["SharedCodec250"]:c3(),["SharedCodec327"]:c4(),["Webhook_invoice_late_fee_waived_merchant"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_invoice_late_fee_waived_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
