import { d1191 as c0, d936 as c1, d944 as c2, d526 as c3, d935 as c4, d943 as c5, d963 as c6, d964 as c7, d968 as c8, d1187 as c9, d1189 as c10, d1190 as c11, d1188 as c12 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1191 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1191;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook622846acc8b6Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec286"]:c4(),["SharedCodec291"]:c5(),["SharedCodec300"]:c6(),["SharedCodec301"]:c7(),["SharedCodec305"]:c8(),["SharedCodec349"]:c9(),["SharedCodec350"]:c10(),["Webhook_order_fulfillment_shipment_created_installed_merchants"]:c11(),["Webhook_order_fulfillment_shipment_created_merchant"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook622846acc8b6Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
