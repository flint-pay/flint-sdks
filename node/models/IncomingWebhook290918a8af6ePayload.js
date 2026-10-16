import { d1029 as c0, d898 as c1, d903 as c2, d500 as c3, d897 as c4, d902 as c5, d922 as c6, d923 as c7, d1025 as c8, d1027 as c9, d1028 as c10, d1026 as c11 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d1029 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1029;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook290918a8af6ePayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec176"]:c3(),["SharedCodec250"]:c4(),["SharedCodec252"]:c5(),["SharedCodec261"]:c6(),["SharedCodec262"]:c7(),["SharedCodec288"]:c8(),["SharedCodec289"]:c9(),["Webhook_order_fulfillment_updated_installed_merchants"]:c10(),["Webhook_order_fulfillment_updated_merchant"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook290918a8af6ePayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
