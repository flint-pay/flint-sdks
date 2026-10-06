import { d930 as c0, d525 as c1, d929 as c2, d996 as c3, d1157 as c4 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d1157 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1157;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["SharedCodec199"]:c1(),["SharedCodec282"]:c2(),["SharedCodec311"]:c3(),["Webhook_invoice_delivery_succeeded_merchant"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_invoice_delivery_succeeded_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
