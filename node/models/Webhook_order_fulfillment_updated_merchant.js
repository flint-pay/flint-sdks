import { d930 as c0, d525 as c1, d929 as c2, d957 as c3, d958 as c4, d1060 as c5, d1061 as c6 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d1061 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1061;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["SharedCodec199"]:c1(),["SharedCodec282"]:c2(),["SharedCodec296"]:c3(),["SharedCodec297"]:c4(),["SharedCodec323"]:c5(),["Webhook_order_fulfillment_updated_merchant"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_fulfillment_updated_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
