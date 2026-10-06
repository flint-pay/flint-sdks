import { d1045 as c0, d916 as c1, d924 as c2, d520 as c3, d915 as c4, d923 as c5, d1041 as c6, d1043 as c7, d1044 as c8, d1042 as c9 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1045 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1045;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook28eb66b9f1a5Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec281"]:c4(),["SharedCodec286"]:c5(),["SharedCodec320"]:c6(),["SharedCodec321"]:c7(),["Webhook_refund_updated_installed_merchants"]:c8(),["Webhook_refund_updated_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook28eb66b9f1a5Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
