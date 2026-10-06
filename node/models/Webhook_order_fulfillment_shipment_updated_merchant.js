import { d930 as c0, d525 as c1, d929 as c2, d941 as c3, d957 as c4, d958 as c5, d962 as c6, d1395 as c7, d1394 as c8, d1396 as c9 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d1396 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1396;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["SharedCodec199"]:c1(),["SharedCodec282"]:c2(),["SharedCodec289"]:c3(),["SharedCodec296"]:c4(),["SharedCodec297"]:c5(),["SharedCodec301"]:c6(),["SharedCodec387"]:c7(),["SharedCodec388"]:c8(),["Webhook_order_fulfillment_shipment_updated_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_fulfillment_shipment_updated_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
