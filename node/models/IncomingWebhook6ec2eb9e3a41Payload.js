import { d1209 as c0, d893 as c1, d901 as c2, d490 as c3, d892 as c4, d900 as c5, d1205 as c6, d1207 as c7, d1208 as c8, d1206 as c9 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d1209 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1209;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook6ec2eb9e3a41Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec170"]:c3(),["SharedCodec246"]:c4(),["SharedCodec251"]:c5(),["SharedCodec324"]:c6(),["SharedCodec325"]:c7(),["Webhook_subscription_cycle_skipped_installed_merchants"]:c8(),["Webhook_subscription_cycle_skipped_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook6ec2eb9e3a41Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
