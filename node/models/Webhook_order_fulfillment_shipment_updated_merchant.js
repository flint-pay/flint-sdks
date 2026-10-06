import { d916 as c0, d520 as c1, d915 as c2, d927 as c3, d943 as c4, d944 as c5, d948 as c6, d1371 as c7, d1370 as c8, d1372 as c9 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1372 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1372;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["SharedCodec199"]:c1(),["SharedCodec281"]:c2(),["SharedCodec288"]:c3(),["SharedCodec295"]:c4(),["SharedCodec296"]:c5(),["SharedCodec300"]:c6(),["SharedCodec385"]:c7(),["SharedCodec386"]:c8(),["Webhook_order_fulfillment_shipment_updated_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_fulfillment_shipment_updated_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
