import { d1167 as c0, d916 as c1, d924 as c2, d520 as c3, d915 as c4, d923 as c5, d943 as c6, d944 as c7, d948 as c8, d1163 as c9, d1165 as c10, d1166 as c11, d1164 as c12 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1167 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1167;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook622846acc8b6Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec281"]:c4(),["SharedCodec286"]:c5(),["SharedCodec295"]:c6(),["SharedCodec296"]:c7(),["SharedCodec300"]:c8(),["SharedCodec343"]:c9(),["SharedCodec344"]:c10(),["Webhook_order_fulfillment_shipment_created_installed_merchants"]:c11(),["Webhook_order_fulfillment_shipment_created_merchant"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook622846acc8b6Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
