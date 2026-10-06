import { d930 as c0, d525 as c1, d929 as c2, d942 as c3, d941 as c4, d943 as c5 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d943 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d943;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["SharedCodec199"]:c1(),["SharedCodec282"]:c2(),["SharedCodec288"]:c3(),["SharedCodec289"]:c4(),["Webhook_order_fulfillment_event_created_merchant"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_fulfillment_event_created_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
