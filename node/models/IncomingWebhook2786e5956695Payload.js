import { d1030 as c0, d916 as c1, d924 as c2, d520 as c3, d915 as c4, d923 as c5, d982 as c6, d984 as c7, d1029 as c8, d1028 as c9 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1030 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1030;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook2786e5956695Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec281"]:c4(),["SharedCodec286"]:c5(),["SharedCodec310"]:c6(),["SharedCodec311"]:c7(),["Webhook_invoice_manual_payment_recorded_installed_merchants"]:c8(),["Webhook_invoice_manual_payment_recorded_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook2786e5956695Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
