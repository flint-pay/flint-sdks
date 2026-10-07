import { d1028 as c0, d936 as c1, d944 as c2, d526 as c3, d935 as c4, d943 as c5, d1014 as c6, d1027 as c7, d1026 as c8 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1028 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1028;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook2100acf09455Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec286"]:c4(),["SharedCodec291"]:c5(),["SharedCodec319"]:c6(),["Webhook_order_payment_authorized_installed_merchants"]:c7(),["Webhook_order_payment_authorized_merchant"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook2100acf09455Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
