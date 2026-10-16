import { d1533 as c0, d898 as c1, d903 as c2, d500 as c3, d897 as c4, d902 as c5, d1529 as c6, d1531 as c7, d1532 as c8, d1530 as c9 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d1533 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1533;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookeff38a7dc9a0Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec176"]:c3(),["SharedCodec250"]:c4(),["SharedCodec252"]:c5(),["SharedCodec383"]:c6(),["SharedCodec384"]:c7(),["Webhook_customer_deletion_rejected_installed_merchants"]:c8(),["Webhook_customer_deletion_rejected_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookeff38a7dc9a0Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
