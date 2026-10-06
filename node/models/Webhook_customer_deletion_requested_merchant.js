import { d930 as c0, d525 as c1, d929 as c2, d1167 as c3, d1168 as c4 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d1168 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1168;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["SharedCodec199"]:c1(),["SharedCodec282"]:c2(),["SharedCodec341"]:c3(),["Webhook_customer_deletion_requested_merchant"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_customer_deletion_requested_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
