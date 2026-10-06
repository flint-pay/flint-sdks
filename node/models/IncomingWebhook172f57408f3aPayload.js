import { d991 as c0, d916 as c1, d924 as c2, d520 as c3, d915 as c4, d923 as c5, d987 as c6, d989 as c7, d990 as c8, d988 as c9 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d991 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d991;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook172f57408f3aPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec281"]:c4(),["SharedCodec286"]:c5(),["SharedCodec312"]:c6(),["SharedCodec313"]:c7(),["Webhook_checkout_session_invalidated_installed_merchants"]:c8(),["Webhook_checkout_session_invalidated_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook172f57408f3aPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
