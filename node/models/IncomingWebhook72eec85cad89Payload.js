import { d1224 as c0, d916 as c1, d77 as c2, d924 as c3, d520 as c4, d915 as c5, d923 as c6, d1220 as c7, d1222 as c8, d1223 as c9, d1221 as c10 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1224 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1224;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook72eec85cad89Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["MoneyValue"]:c2(),["PartnerWebhookEnvelope"]:c3(),["SharedCodec199"]:c4(),["SharedCodec281"]:c5(),["SharedCodec286"]:c6(),["SharedCodec353"]:c7(),["SharedCodec354"]:c8(),["Webhook_invoice_late_fee_waived_installed_merchants"]:c9(),["Webhook_invoice_late_fee_waived_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook72eec85cad89Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
