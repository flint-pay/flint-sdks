import { d921 as c0, d898 as c1, d903 as c2, d500 as c3, d897 as c4, d902 as c5, d917 as c6, d916 as c7, d919 as c8, d920 as c9, d918 as c10 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d921 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d921;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook06baf65fb878Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec176"]:c3(),["SharedCodec250"]:c4(),["SharedCodec252"]:c5(),["SharedCodec257"]:c6(),["SharedCodec258"]:c7(),["SharedCodec259"]:c8(),["Webhook_payment_intent_fulfillment_hold_updated_installed_merchants"]:c9(),["Webhook_payment_intent_fulfillment_hold_updated_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook06baf65fb878Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
