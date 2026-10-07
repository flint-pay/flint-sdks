import { d1332 as c0, d936 as c1, d944 as c2, d526 as c3, d935 as c4, d943 as c5, d947 as c6, d963 as c7, d964 as c8, d967 as c9, d965 as c10, d966 as c11, d968 as c12, d1328 as c13, d1327 as c14, d1330 as c15, d1331 as c16, d1329 as c17 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1332 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1332;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook96e4efc9dab0Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec286"]:c4(),["SharedCodec291"]:c5(),["SharedCodec293"]:c6(),["SharedCodec300"]:c7(),["SharedCodec301"]:c8(),["SharedCodec302"]:c9(),["SharedCodec303"]:c10(),["SharedCodec304"]:c11(),["SharedCodec305"]:c12(),["SharedCodec372"]:c13(),["SharedCodec373"]:c14(),["SharedCodec374"]:c15(),["Webhook_order_fulfillment_package_updated_installed_merchants"]:c16(),["Webhook_order_fulfillment_package_updated_merchant"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook96e4efc9dab0Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
