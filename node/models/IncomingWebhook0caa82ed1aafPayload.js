import { d977 as c0, d936 as c1, d944 as c2, d526 as c3, d935 as c4, d943 as c5, d975 as c6, d976 as c7, d974 as c8 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d977 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d977;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook0caa82ed1aafPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec286"]:c4(),["SharedCodec291"]:c5(),["SharedCodec307"]:c6(),["Webhook_delivery_rate_callback_created_installed_merchants"]:c7(),["Webhook_delivery_rate_callback_created_merchant"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook0caa82ed1aafPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
