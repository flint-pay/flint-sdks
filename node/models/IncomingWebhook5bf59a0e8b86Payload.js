import { d1171 as c0, d930 as c1, d938 as c2, d525 as c3, d929 as c4, d937 as c5, d1167 as c6, d1169 as c7, d1170 as c8, d1168 as c9 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d1171 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1171;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook5bf59a0e8b86Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec282"]:c4(),["SharedCodec287"]:c5(),["SharedCodec341"]:c6(),["SharedCodec342"]:c7(),["Webhook_customer_deletion_requested_installed_merchants"]:c8(),["Webhook_customer_deletion_requested_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook5bf59a0e8b86Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
