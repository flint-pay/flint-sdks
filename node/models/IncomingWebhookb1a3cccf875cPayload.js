import { d1380 as c0, d916 as c1, d520 as c2, d915 as c3, d2527 as c4 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1380 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1380;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookb1a3cccf875cPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["SharedCodec199"]:c2(),["SharedCodec281"]:c3(),["Webhook_inventory_shortage_detected_merchant"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookb1a3cccf875cPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
