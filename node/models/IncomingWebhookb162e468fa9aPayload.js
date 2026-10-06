import { d1375 as c0, d916 as c1, d924 as c2, d520 as c3, d915 as c4, d923 as c5, d927 as c6, d943 as c7, d944 as c8, d948 as c9, d1371 as c10, d1370 as c11, d1373 as c12, d1374 as c13, d1372 as c14 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1375 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1375;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookb162e468fa9aPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec281"]:c4(),["SharedCodec286"]:c5(),["SharedCodec288"]:c6(),["SharedCodec295"]:c7(),["SharedCodec296"]:c8(),["SharedCodec300"]:c9(),["SharedCodec385"]:c10(),["SharedCodec386"]:c11(),["SharedCodec387"]:c12(),["Webhook_order_fulfillment_shipment_updated_installed_merchants"]:c13(),["Webhook_order_fulfillment_shipment_updated_merchant"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookb162e468fa9aPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
