import { d1257 as c0, d936 as c1, d944 as c2, d526 as c3, d935 as c4, d943 as c5, d975 as c6, d1256 as c7, d1255 as c8 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1257 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1257;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook7730424c8474Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec286"]:c4(),["SharedCodec291"]:c5(),["SharedCodec307"]:c6(),["Webhook_return_decision_recorded_installed_merchants"]:c7(),["Webhook_return_decision_recorded_merchant"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook7730424c8474Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
