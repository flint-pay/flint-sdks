import { d1130 as c0, d936 as c1, d944 as c2, d526 as c3, d935 as c4, d943 as c5, d1126 as c6, d1128 as c7, d1129 as c8, d1127 as c9 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1130 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1130;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook42dd85c73d6bPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec286"]:c4(),["SharedCodec291"]:c5(),["SharedCodec336"]:c6(),["SharedCodec337"]:c7(),["Webhook_subscription_reactivated_installed_merchants"]:c8(),["Webhook_subscription_reactivated_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook42dd85c73d6bPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
