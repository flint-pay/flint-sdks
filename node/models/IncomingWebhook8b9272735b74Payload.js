import { d1296 as c0, d936 as c1, d944 as c2, d526 as c3, d935 as c4, d943 as c5, d1014 as c6, d1295 as c7, d1294 as c8 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1296 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1296;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook8b9272735b74Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec286"]:c4(),["SharedCodec291"]:c5(),["SharedCodec319"]:c6(),["Webhook_order_refunded_installed_merchants"]:c7(),["Webhook_order_refunded_merchant"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook8b9272735b74Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
