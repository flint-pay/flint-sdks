import { d1313 as c0, d893 as c1, d901 as c2, d490 as c3, d892 as c4, d900 as c5, d904 as c6, d920 as c7, d921 as c8, d924 as c9, d922 as c10, d923 as c11, d925 as c12, d1309 as c13, d1308 as c14, d1311 as c15, d1312 as c16, d1310 as c17 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d1313 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1313;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook96e4efc9dab0Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec170"]:c3(),["SharedCodec246"]:c4(),["SharedCodec251"]:c5(),["SharedCodec253"]:c6(),["SharedCodec260"]:c7(),["SharedCodec261"]:c8(),["SharedCodec262"]:c9(),["SharedCodec263"]:c10(),["SharedCodec264"]:c11(),["SharedCodec265"]:c12(),["SharedCodec341"]:c13(),["SharedCodec342"]:c14(),["SharedCodec343"]:c15(),["Webhook_order_fulfillment_package_updated_installed_merchants"]:c16(),["Webhook_order_fulfillment_package_updated_merchant"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook96e4efc9dab0Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
