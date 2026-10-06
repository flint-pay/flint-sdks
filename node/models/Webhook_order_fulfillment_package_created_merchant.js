import { d916 as c0, d520 as c1, d915 as c2, d949 as c3, d943 as c4, d944 as c5, d947 as c6, d945 as c7, d946 as c8, d948 as c9, d950 as c10 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d950 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d950;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["SharedCodec199"]:c1(),["SharedCodec281"]:c2(),["SharedCodec294"]:c3(),["SharedCodec295"]:c4(),["SharedCodec296"]:c5(),["SharedCodec297"]:c6(),["SharedCodec298"]:c7(),["SharedCodec299"]:c8(),["SharedCodec300"]:c9(),["Webhook_order_fulfillment_package_created_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_fulfillment_package_created_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
