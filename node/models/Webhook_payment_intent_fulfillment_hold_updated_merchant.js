import { d916 as c0, d520 as c1, d915 as c2, d938 as c3, d937 as c4, d939 as c5 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d939 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d939;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["SharedCodec199"]:c1(),["SharedCodec281"]:c2(),["SharedCodec291"]:c3(),["SharedCodec292"]:c4(),["Webhook_payment_intent_fulfillment_hold_updated_merchant"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_payment_intent_fulfillment_hold_updated_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
