import { d1080 as c0, d898 as c1, d903 as c2, d500 as c3, d897 as c4, d902 as c5, d1020 as c6, d1022 as c7, d1079 as c8, d1078 as c9 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d1080 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1080;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook3b618fd743f5Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec176"]:c3(),["SharedCodec250"]:c4(),["SharedCodec252"]:c5(),["SharedCodec286"]:c6(),["SharedCodec287"]:c7(),["Webhook_refund_failed_installed_merchants"]:c8(),["Webhook_refund_failed_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook3b618fd743f5Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
