import { d1123 as c0, d898 as c1, d903 as c2, d500 as c3, d897 as c4, d902 as c5, d1119 as c6, d1121 as c7, d1122 as c8, d1120 as c9 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d1123 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1123;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook4cf95bc872d3Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec176"]:c3(),["SharedCodec250"]:c4(),["SharedCodec252"]:c5(),["SharedCodec308"]:c6(),["SharedCodec309"]:c7(),["Webhook_order_inventory_exception_resolved_installed_merchants"]:c8(),["Webhook_order_inventory_exception_resolved_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook4cf95bc872d3Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
