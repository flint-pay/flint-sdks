import { d1172 as c0, d916 as c1, d924 as c2, d520 as c3, d915 as c4, d923 as c5, d1168 as c6, d1170 as c7, d1171 as c8, d1169 as c9 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1172 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1172;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook63b2b06a26ecPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec281"]:c4(),["SharedCodec286"]:c5(),["SharedCodec345"]:c6(),["SharedCodec346"]:c7(),["Webhook_order_created_installed_merchants"]:c8(),["Webhook_order_created_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook63b2b06a26ecPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
