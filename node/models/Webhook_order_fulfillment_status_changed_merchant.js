import { d930 as c0, d525 as c1, d929 as c2, d957 as c3, d958 as c4, d1310 as c5, d1309 as c6, d1311 as c7 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d1311 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1311;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["SharedCodec199"]:c1(),["SharedCodec282"]:c2(),["SharedCodec296"]:c3(),["SharedCodec297"]:c4(),["SharedCodec365"]:c5(),["SharedCodec366"]:c6(),["Webhook_order_fulfillment_status_changed_merchant"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_fulfillment_status_changed_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
