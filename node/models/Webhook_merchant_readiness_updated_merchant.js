import { d916 as c0, d520 as c1, d915 as c2, d1495 as c3, d1493 as c4, d1492 as c5, d1491 as c6, d1494 as c7, d2534 as c8 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d2534 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2534;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["SharedCodec199"]:c1(),["SharedCodec281"]:c2(),["SharedCodec399"]:c3(),["SharedCodec400"]:c4(),["SharedCodec401"]:c5(),["SharedCodec402"]:c6(),["SharedCodec403"]:c7(),["Webhook_merchant_readiness_updated_merchant"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_merchant_readiness_updated_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
