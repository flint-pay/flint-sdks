import { d1503 as c0, d936 as c1, d944 as c2, d526 as c3, d935 as c4, d943 as c5, d1499 as c6, d1501 as c7, d1502 as c8, d1500 as c9 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1503 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1503;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookdc1126d5a87dPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec286"]:c4(),["SharedCodec291"]:c5(),["SharedCodec402"]:c6(),["SharedCodec403"]:c7(),["Webhook_checkout_session_expired_installed_merchants"]:c8(),["Webhook_checkout_session_expired_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookdc1126d5a87dPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
