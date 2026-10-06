import { d1008 as c0, d916 as c1, d924 as c2, d520 as c3, d915 as c4, d923 as c5, d994 as c6, d1007 as c7, d1006 as c8 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1008 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1008;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook2100acf09455Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec281"]:c4(),["SharedCodec286"]:c5(),["SharedCodec314"]:c6(),["Webhook_order_payment_authorized_installed_merchants"]:c7(),["Webhook_order_payment_authorized_merchant"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook2100acf09455Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
