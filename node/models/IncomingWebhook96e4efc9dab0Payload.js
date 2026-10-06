import { d1302 as c0, d916 as c1, d924 as c2, d520 as c3, d915 as c4, d923 as c5, d927 as c6, d943 as c7, d944 as c8, d947 as c9, d945 as c10, d946 as c11, d948 as c12, d1298 as c13, d1297 as c14, d1300 as c15, d1301 as c16, d1299 as c17 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1302 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1302;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook96e4efc9dab0Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec281"]:c4(),["SharedCodec286"]:c5(),["SharedCodec288"]:c6(),["SharedCodec295"]:c7(),["SharedCodec296"]:c8(),["SharedCodec297"]:c9(),["SharedCodec298"]:c10(),["SharedCodec299"]:c11(),["SharedCodec300"]:c12(),["SharedCodec366"]:c13(),["SharedCodec367"]:c14(),["SharedCodec368"]:c15(),["Webhook_order_fulfillment_package_updated_installed_merchants"]:c16(),["Webhook_order_fulfillment_package_updated_merchant"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook96e4efc9dab0Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
