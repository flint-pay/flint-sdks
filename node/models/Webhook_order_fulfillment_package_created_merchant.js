import { d930 as c0, d525 as c1, d929 as c2, d963 as c3, d957 as c4, d958 as c5, d961 as c6, d959 as c7, d960 as c8, d962 as c9, d964 as c10 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d964 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d964;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["SharedCodec199"]:c1(),["SharedCodec282"]:c2(),["SharedCodec295"]:c3(),["SharedCodec296"]:c4(),["SharedCodec297"]:c5(),["SharedCodec298"]:c6(),["SharedCodec299"]:c7(),["SharedCodec300"]:c8(),["SharedCodec301"]:c9(),["Webhook_order_fulfillment_package_created_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_fulfillment_package_created_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
