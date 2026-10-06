import { d1295 as c0, d930 as c1, d938 as c2, d525 as c3, d929 as c4, d932 as c5, d937 as c6, d1291 as c7, d1293 as c8, d1294 as c9, d1292 as c10 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d1295 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1295;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook8c8f435e6e23Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec282"]:c4(),["SharedCodec285"]:c5(),["SharedCodec287"]:c6(),["SharedCodec361"]:c7(),["SharedCodec362"]:c8(),["Webhook_invoice_updated_installed_merchants"]:c9(),["Webhook_invoice_updated_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook8c8f435e6e23Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
